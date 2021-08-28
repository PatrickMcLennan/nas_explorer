import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export const movieTrailerResolvers = {
  getMovieTrailers: async (_: any, __: any, { db }: { db: Knex }) => {
    let movieTrailers;

    try {
      await db
        .select(`*`)
        .from(Tables.MOVIE_TRAILERS)
        .then((dbMovieTrailers) => {
          movieTrailers = dbMovieTrailers;
        });
    } catch (knexError) {
      console.error(knexError);
      movieTrailers = [];
    }

    return movieTrailers;
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
