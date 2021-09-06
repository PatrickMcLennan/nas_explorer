import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ApolloServer } from 'apollo-server-express';
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

const corsOptions = {
  origin: `*`,
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
  const server = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: [...scalarTypeDefs, typeDefs],
      resolvers: { ...scalarResolvers, ...resolvers },
    }),
    context: () => ({
      db: Knex,
      redis: redisClient,
    }),
  });

  app.use(morgan(`:method :url :status :res[content-length] - :response-time ms`));
  app.use(cors(corsOptions));

  app.get(ServerRoutes.STREAM_MOVIE, streamMovieHandler);

  await server.start();

  server.applyMiddleware({ app, path: `/api/graphql` });
  app.listen({ port: HTTP_PORT }, () => console.log(`App is listening on Port ${HTTP_PORT}`));
  app.use(express.static(path.resolve(__dirname, `../../html`), { extensions: [`html`] }));

  app.use(
    session({
      name: `nas_media_explorer`,
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000000000,
        httpOnly: true,
        secure: false, // Change this back when https is configured
        sameSite: `lax`,
      },
      saveUninitialized: false,
      secret: APPLICATION_SECRET ?? ``,
      resave: false,
    })
  );

  app.set('trust proxy', 1);
}

try {
  startServer();
} catch (serverError) {
  console.error(serverError);
}
