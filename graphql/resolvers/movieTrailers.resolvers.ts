import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { paginatedDbSEARCH } from '../../lib/paginatedDbSEARCH.lib';
import { serverErrorReducer } from '../../lib/serverErrorReducer.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { validateSearchParams } from '../../lib/serverSearch';
import { MovieTrailer, Pagination } from '../../types/generated.types';
import { Tables } from '../../types/tables.enum';

export const movieTrailerResolvers = {
  getMovieTrailers: async (_: any, { paginationInput }: any, { db }: { db: Knex }) => {
    let movieTrailers: MovieTrailer[];
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
      const [total, dbMovieTrailers] = await paginatedDbGET<MovieTrailer>({
        db,
        offset,
        amount,
        table: Tables.MOVIE_TRAILERS,
      });

      movieTrailers = dbMovieTrailers;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      movieTrailers = [];
    }

    return { movieTrailers, pagination };
  },

  getMovieTrailer: async (_: any, { id }: any, { db }: { db: Knex }) => {
    let movieTrailer;

    try {
      await db
        .select(`*`)
        .from(Tables.MOVIE_TRAILERS)
        .where({ id })
        .then((dbMovieTrailer) => {
          movieTrailer = dbMovieTrailer[0];
        });
    } catch (knexError) {
      console.error(knexError);
    }

    return movieTrailer;
  },

  searchMovieTrailersByKeyValue: async (_: any, { searchInput }: { searchInput: any }, { db }: { db: Knex }) => {
    let movieTrailers: MovieTrailer[];
    let pagination: Pagination = {
      total: NaN,
    };
    const paginationInput = searchInput?.paginationInput;
    const offset = paginationInput?.offset ?? NaN;
    const amount = paginationInput?.amount ?? NaN;
    const searchKey = searchInput?.searchKey;
    const value = searchInput?.value;

    const validPagination = validatePagination({ offset, amount });
    const validSearchParams = await validateSearchParams({ searchInput, db, table: Tables.MOVIE_TRAILERS });

    const { valid, errors, messages } = serverErrorReducer([validPagination, validSearchParams]);

    if (!valid) {
      throw new UserInputError(`${errors} errors`, {
        errors,
        messages,
      });
    }

    try {
      const [total, dbMovieTrailers] = await paginatedDbSEARCH<MovieTrailer>({
        db,
        offset,
        amount,
        table: Tables.MOVIE_TRAILERS,
        searchKey,
        value,
      });
      movieTrailers = dbMovieTrailers;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      movieTrailers = [];
    }

    return { movieTrailers, pagination };
  },
};
