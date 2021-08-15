import Knex from 'knex';
import { DATABASE_URL_PRODUCTION, DATABASE_URL_DEVELOPMENT, NODE_ENV } from '../env';

import path from 'path';

const knexfile: Knex.Config = {
  client: `pg`,
  connection: {
    connectionString: NODE_ENV === `production` ? DATABASE_URL_PRODUCTION : DATABASE_URL_DEVELOPMENT,
  },
  migrations: {
    directory: path.resolve(__dirname, `./postgres/migrations`),
  },
  seeds: {
    directory: path.resolve(__dirname + '/postgres/seeds/development'),
  },
};

export default Knex(knexfile);
