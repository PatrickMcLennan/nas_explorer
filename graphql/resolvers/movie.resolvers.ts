import { awsAxiosClient } from '../../clients/awsAxios.client';
import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';
import { Pagination, PostgresMovie, QueryGetPostgresMovieArgs } from '../../types/generated.types';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { UserInputError } from 'apollo-server-express';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { validateSearchParams } from '../../lib/validateSearchParams';
import { serverErrorReducer } from '../../lib/serverErrorReducer.lib';
import { paginatedDbSEARCH } from '../../lib/paginatedDbSEARCH.lib';
import { GraphQLContext } from '../../types/graphqlContext.types';

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

  getPostgresMovies: async (_: any, { paginationInput }: any, { db }: GraphQLContext) => {
    let postgresMovies!: PostgresMovie[];
    let pagination: Pagination = {
      total: 0,
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
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      postgresMovies = [];
    }

    return { postgresMovies, pagination };
  },

  getPostgresMovie: async (_: any, { id }: QueryGetPostgresMovieArgs, { db }: GraphQLContext) => {
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

    return movie;
  },

  searchPostgresMoviesByKeyValue: async (_: any, { searchInput }: { searchInput: any }, { db }: { db: Knex }) => {
    let postgresMovies: PostgresMovie[];
    let pagination: Pagination = {
      total: NaN,
    };

    const paginationInput = searchInput?.paginationInput;
    const offset = paginationInput?.offset ?? NaN;
    const amount = paginationInput?.amount ?? NaN;
    const searchKey = searchInput?.searchKey;
    const value = searchInput?.value;

    const validPagination = validatePagination({ offset, amount });
    const validSearchParams = await validateSearchParams({ searchInput, db, table: Tables.MOVIES });

    const { valid, errors, messages } = serverErrorReducer([validPagination, validSearchParams]);

    if (!valid) {
      throw new UserInputError(`${errors} errors`, {
        errors,
        messages,
      });
    }

    try {
      const [total, dbPostgresMovies] = await paginatedDbSEARCH<PostgresMovie>({
        db,
        offset,
        amount,
        table: Tables.MOVIES,
        searchKey,
        value,
      });
      postgresMovies = dbPostgresMovies;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      postgresMovies = [];
    }

    return { postgresMovies, pagination };
  },
};
