import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { paginatedDbSEARCH } from '../../lib/paginatedDbSEARCH.lib';
import { serverErrorReducer } from '../../lib/serverErrorReducer.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { validateSearchParams } from '../../lib/validateSearchParams';
import { Genre, GetGenresResponse, Pagination, PaginationInput } from '../../types/generated.types';
import { GraphQLContext } from '../../types/graphqlContext.types';
import { Tables } from '../../types/tables.enum';

export const genresResolvers = {
  getGenres: async (
    _: any,
    { paginationInput }: { paginationInput: PaginationInput },
    { db }: GraphQLContext
  ): Promise<GetGenresResponse> => {
    let genres!: Genre[];
    let pagination: Pagination = {
      total: NaN,
    };

    const offset = paginationInput?.offset ?? NaN;
    const amount = paginationInput?.amount ?? NaN;

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
      pagination = repaginate({ total });
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

  searchGenresByKeyValue: async (_: any, { searchInput }: { searchInput: any }, { db }: { db: Knex }) => {
    let genres: Genre[];
    let pagination: Pagination = {
      total: NaN,
    };
    const paginationInput = searchInput?.paginationInput;
    const offset = paginationInput?.offset ?? NaN;
    const amount = paginationInput?.amount ?? NaN;
    const searchKey = searchInput?.searchKey;
    const value = searchInput?.value;

    const validPagination = validatePagination({ offset, amount });
    const validSearchParams = await validateSearchParams({ searchInput, db, table: Tables.GENRES });

    const { valid, errors, messages } = serverErrorReducer([validPagination, validSearchParams]);

    if (!valid) {
      throw new UserInputError(`${errors} errors`, {
        errors,
        messages,
      });
    }

    try {
      const [total, dbGenres] = await paginatedDbSEARCH<Genre>({
        db,
        offset,
        amount,
        table: Tables.GENRES,
        searchKey,
        value,
      });
      genres = dbGenres;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      genres = [];
    }

    return { genres, pagination };
  },
};
