import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { Genre, GetGenresResponse, Pagination } from '../../types/generated.types';
import { Tables } from '../../types/tables.enum';

export const genresResolvers = {
  getGenres: async (_: any, { paginationInput }: any, { db }: { db: Knex }): Promise<GetGenresResponse> => {
    let genres!: Genre[];
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
      const [total, dbGenres] = await paginatedDbGET<Genre>({
        db,
        offset,
        amount,
        table: Tables.GENRES,
      });
      genres = dbGenres;
      pagination = repaginate({ paginationInput, total });
    } catch (knexError) {
      console.error(knexError);
      genres = [];
    }

    return { genres, pagination };
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
