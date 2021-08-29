import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
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
};
