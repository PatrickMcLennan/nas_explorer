import { DATABASE_URL_DEVELOPMENT, DATABASE_URL_PRODUCTION, DATABASE_URL_TEST } from "./env";

const path = require('path');


export default {
  test: {
    client: 'pg',
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: __dirname + '/postgres/migrations',
    },
    seeds: {
      directory: __dirname + '/postgres/seeds/test',
    },
  },
  development: {
    client: 'pg',
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.resolve(__dirname, `./postgres/migrations`),
    },
    seeds: {
      directory: path.resolve(__dirname + '/postgres/seeds/development'),
    },
  },

  production: {
    client: 'pg',
    connection: DATABASE_URL_PRODUCTION,
    migrations: {
      directory: path.resolve(__dirname, `./postgres/migrations`),
    },
    seeds: {
      directory: path.resolve(__dirname + '/postgres/seeds/production'),
    },
  },
} as const;
