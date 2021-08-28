import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export const spokenLangaugeResolvers = {
  getSpokenLanguages: async (_: any, __: any, { db }: { db: Knex }) => {
    let languages;

    try {
      await db
        .select(`*`)
        .from(Tables.SPOKEN_LANGUAGES)
        .then((dbLanguages) => {
          languages = dbLanguages;
        });
    } catch (knexError) {
      console.error(knexError);
      languages = [];
    }

    return languages;
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
