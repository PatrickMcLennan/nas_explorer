import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export const genresResolvers = {
  getGenres: async (_: any, __: any, { db }: { db: Knex }) => {
    let genres;

    try {
      await db
        .select(`*`)
        .from(Tables.GENRES)
        .then((dbGenres) => {
          genres = dbGenres;
        });
    } catch (knexError) {
      console.error(knexError);
      genres = [];
    }

    return genres;
  },

  getGenre: async (_: any, { id }: any, { db }: { db: Knex }) => {
    let genre;

    try {
      await db
        .select(`*`)
        .from(Tables.GENRES)
        .where({ id })
        .then((dbGenre) => {
          genre = dbGenre[0];
        });
    } catch (knexError) {
      console.error(knexError);
    }

    return genre;
  },
};
