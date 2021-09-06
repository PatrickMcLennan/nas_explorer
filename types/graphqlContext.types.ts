import express from 'express';
import Knex from 'knex';
import { RedisClient } from 'redis';

export type GraphQLContext = {
  db: Knex;
  redis: RedisClient;
  request: express.Request;
  response: express.Response;
};
