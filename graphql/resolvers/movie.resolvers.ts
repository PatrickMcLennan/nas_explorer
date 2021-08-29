import { awsAxiosClient } from '../../clients/awsAxios.client';
import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';
import { Pagination, PostgresMovie, QueryGetPostgresMovieArgs } from '../../types/generated.types';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { UserInputError } from 'apollo-server-express';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';

export const movieResolvers = {
  getDynamoMovies: async () => {
    let dynamoMovies;
    try {
      const { data } = await awsAxiosClient({
        method: `GET`,
        url: `/movies`,
      });
      dynamoMovies = data;
    } catch (movieError) {
      console.error(movieError);
      dynamoMovies = [];
    }
    return dynamoMovies;
  },

  getPostgresMovies: async (_: any, { paginationInput }: any, { db }: { db: Knex }) => {
    let postgresMovies!: PostgresMovie[];
    let pagination: Pagination = {
      total: NaN,
    };

    const offset = paginationInput?.offset;
    const amount = paginationInput?.amount;

    const { valid, errors, messages } = validatePagination({ offset, amount });
    if (!valid) {
      throw new UserInputError(`${errors} errors`, {
        errors,
        messages,
      });
    }

    try {
      const [total, dbMovies] = await paginatedDbGET<PostgresMovie>({
        db,
        offset,
        amount,
        table: Tables.MOVIES,
      });

      postgresMovies = dbMovies;
      pagination = repaginate({ paginationInput, total });
    } catch (knexError) {
      console.error(knexError);
      postgresMovies = [];
    }

    return { postgresMovies, pagination };
  },

  getPostgresMovie: async (_: any, { id }: QueryGetPostgresMovieArgs, { db }: { db: Knex }) => {
    let movie;
    try {
      await db
        .select()
        .from(Tables.MOVIES)
        .where({ id })
        .then((dbMovie) => {
          movie = dbMovie[0];
        });
    } catch (knexError) {
      console.error(knexError);
      movie = {};
    }
    console.log(movie);
    return movie;
  },
};
