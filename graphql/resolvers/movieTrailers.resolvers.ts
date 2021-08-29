import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
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
      pagination = repaginate({ paginationInput, total });
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
};
