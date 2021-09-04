import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from '../graphql/typeDefs/typeDefs';
import { resolvers } from '../graphql/resolvers/resolvers';
import fs from 'fs';
import { HTTP_PORT, MOVIES_DIR } from '../env';
import https from 'https';
import Knex from '../postgres/knex';
import path from 'path';
import { typeDefs as scalarTypeDefs, resolvers as scalarResolvers } from 'graphql-scalars';
import { makeExecutableSchema } from '@graphql-tools/schema';

const corsOptions = {
  origin: `*`,
};

const key = fs.readFileSync(path.resolve(__dirname + './../selfsigned.key'));
const cert = fs.readFileSync(path.resolve(__dirname + './../selfsigned.crt'));

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: [...scalarTypeDefs, typeDefs],
      resolvers: { ...scalarResolvers, ...resolvers },
    }),
    context: () => ({
      db: Knex,
    }),
  });

  app.use(morgan(`:method :url :status :res[content-length] - :response-time ms`));
  app.use(cors(corsOptions));
  app.get(`/stream/movie/:fileName`, (req, res) => {
    const range = req.headers.range;

    if (!range) {
      return res.status(400).send(`Requires Range Header`);
    }

    const videoPath = path.join(MOVIES_DIR ?? ``, req.params.fileName);
    let videoSize;
    try {
      videoSize = fs?.statSync?.(videoPath)?.size;
    } catch (fsError) {
      console.error(fsError);
      return res.status(404).send(`Video not found`);
    }

    if (!videoSize) {
      return res.status(404).send(`Video not found`);
    }

    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range?.replace(/\D/g, ''));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
      'Content-Range': `bytes ${start}-${end}/${videoSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });

    return videoStream.pipe(res);
  });

  await server.start();

  server.applyMiddleware({ app, path: `/api/graphql` });
  app.listen({ port: HTTP_PORT }, () => console.log(`App is listening on Port ${HTTP_PORT}`));
  app.use(express.static(path.resolve(__dirname, `../../html`), { extensions: [`html`] }));

  // return https.createServer({ key, cert }, app);
}

try {
  startServer();
} catch (serverError) {
  console.error(serverError);
}
