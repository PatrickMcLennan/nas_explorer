import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { paginatedDbSEARCH } from '../../lib/paginatedDbSEARCH.lib';
import { serverErrorReducer } from '../../lib/serverErrorReducer.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { validateSearchParams } from '../../lib/serverSearch';
import { Pagination, SpokenLanguage } from '../../types/generated.types';
import { Tables } from '../../types/tables.enum';

export const spokenLangaugeResolvers = {
  getSpokenLanguages: async (_: any, { paginationInput }: any, { db }: { db: Knex }) => {
    let spokenLanguages: SpokenLanguage[];
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
      const [total, dbMovieTrailers] = await paginatedDbGET<SpokenLanguage>({
        db,
        offset,
        amount,
        table: Tables.MOVIE_TRAILERS,
      });

      spokenLanguages = dbMovieTrailers;
      pagination = repaginate({ paginationInput, total });
    } catch (knexError) {
      console.error(knexError);
      spokenLanguages = [];
    }

    return { spokenLanguages, pagination };
  },

  getSpokenLanguage: async (_: any, { id }: any, { db }: { db: Knex }) => {
    let language;

    try {
      await db
        .select(`*`)
        .from(Tables.SPOKEN_LANGUAGES)
        .where({ id })
        .then((dbLanguage) => {
          language = dbLanguage[0];
        });
    } catch (knexError) {
      console.error(knexError);
    }

    return language;
  },

  searchSpokenLanguagesByKeyValue: async (_: any, { searchInput }: { searchInput: any }, { db }: { db: Knex }) => {
    let spokenLanguages: SpokenLanguage[];
    let pagination: Pagination = {
      total: NaN,
    };
    const paginationInput = searchInput?.paginationInput;
    const offset = paginationInput?.offset ?? NaN;
    const amount = paginationInput?.amount ?? NaN;
    const searchKey = searchInput?.searchKey;
    const value = searchInput?.value;

    const validPagination = validatePagination({ offset, amount });
    const validSearchParams = await validateSearchParams({ searchInput, db, table: Tables.SPOKEN_LANGUAGES });

    const { valid, errors, messages } = serverErrorReducer([validPagination, validSearchParams]);

    if (!valid) {
      throw new UserInputError(`${errors} errors`, {
        errors,
        messages,
      });
    }

    try {
      const [total, dbSpokenLanguages] = await paginatedDbSEARCH<SpokenLanguage>({
        db,
        offset,
        amount,
        table: Tables.SPOKEN_LANGUAGES,
        searchKey,
        value,
      });
      spokenLanguages = dbSpokenLanguages;
      pagination = repaginate({ paginationInput, total });
    } catch (knexError) {
      console.error(knexError);
      spokenLanguages = [];
    }

    return { spokenLanguages, pagination };
  },
};
