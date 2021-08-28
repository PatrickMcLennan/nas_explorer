import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export const productionCountryResolvers = {
  getProductionCountries: async (_: any, __: any, { db }: { db: Knex }) => {
    let countries;

    try {
      await db
        .select(`*`)
        .from(Tables.PRODUCTION_COUNTRIES)
        .then((dbCountries) => {
          countries = dbCountries;
        });
    } catch (knexError) {
      console.error(knexError);
      countries = [];
    }

    return countries;
  },

  getProductionCountry: async (_: any, { id }: any, { db }: { db: Knex }) => {
    let country;

    try {
      await db
        .select(`*`)
        .from(Tables.PRODUCTION_COUNTRIES)
        .where({ id })
        .then((dbCountry) => {
          country = dbCountry[0];
        });
    } catch (knexError) {
      console.error(knexError);
    }

    return country;
  },
};
