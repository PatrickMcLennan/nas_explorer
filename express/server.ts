import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { typeDefs } from '../graphql/typeDefs/typeDefs';
import { resolvers } from '../graphql/resolvers/resolvers';
import fs from 'fs';
import { APPLICATION_SECRET, HTTP_PORT, REDIS_PORT } from '../env';
import https from 'https';
import session from 'express-session';
import Knex from '../postgres/knex';
import path from 'path';
import { typeDefs as scalarTypeDefs, resolvers as scalarResolvers } from 'graphql-scalars';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { streamMovieHandler } from './handlers/streamMovie';
import { ServerRoutes } from '../types/serverRoutes.enum';
import redis from 'redis';
import connectRedis from 'connect-redis';
import { GraphQLContext } from '../types/graphqlContext.types';

const corsOptions = {
  origin: `http://localhost:3000`, // TODO: what about prod?
  credentials: true,
};

const key = fs.readFileSync(path.resolve(__dirname + './../selfsigned.key'));
const cert = fs.readFileSync(path.resolve(__dirname + './../selfsigned.crt'));

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: `redis`,
  port: Number(REDIS_PORT) ?? NaN,
});

async function startServer() {
  const app = express();

  app.set('trust proxy', 1); // nginx or something gets in the mix
  app.use(morgan(`:method :url :status :res[content-length] - :response-time ms`));
  app.use(express.static(path.resolve(__dirname, `../../html`), { extensions: [`html`] }));

  app.use(
    session({
      name: `qid`,
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
        secure: false, // TODO: Change this when https is configured for prod
        // sameSite: `none`,
      },
      saveUninitialized: false,
      secret: APPLICATION_SECRET ?? ``,
      resave: false,
    })
  );

  app.get(ServerRoutes.STREAM_MOVIE, streamMovieHandler);

  const server = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: [...scalarTypeDefs, typeDefs],
      resolvers: { ...scalarResolvers, ...resolvers },
    }),
    context: ({ req, res }: ExpressContext): GraphQLContext => ({
      db: Knex,
      redis: redisClient,
      request: req,
      response: res,
    }),
  });

  await server.start();

  server.applyMiddleware({ app, path: `/api/graphql`, cors: corsOptions });

  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:3000`); // TODO: what about prod?
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    // Pass to next layer of middleware
    res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie');
    next();
  });

  app.listen({ port: HTTP_PORT }, () => console.log(`App is listening on Port ${HTTP_PORT}`));
}

try {
  startServer();
} catch (serverError) {
  console.error(serverError);
}
