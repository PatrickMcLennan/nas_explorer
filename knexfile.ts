import type { Config } from 'knex';
import { POSTGRES_USER, POSTGRES_PASSWORD, DATABASE_URL_PRODUCTION, DATABASE_URL_DEVELOPMENT, NODE_ENV } from './env';
import path from 'path';

const config: Config = {
  client: `pg`,
  connection: {
    connectionString: NODE_ENV === `production` ? DATABASE_URL_PRODUCTION : DATABASE_URL_DEVELOPMENT,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  },
  migrations: {
    directory: path.resolve(__dirname, `./postgres/migrations`),
    extension: `ts`,
  },
  seeds: {
    directory: path.resolve(__dirname, './postgres/seeds'),
    extension: `ts`,
  },
};

export default config;
