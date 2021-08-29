import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export const productionCompanyResolvers = {
  getProductionCompanies: async (
    _: any,
    { paginationInput }: any,
    { db }: { db: Knex }
  ): Promise<GetGenresResponse> => {
    let productionCompanies;

    try {
      await db
        .select(`*`)
        .from(Tables.PRODUCTION_COMPANIES)
        .then((dbProductionCompanies) => {
          productionCompanies = dbProductionCompanies;
        });
    } catch (knexError) {
      console.error(knexError);
      productionCompanies = [];
    }

    return productionCompanies;
  },

  getProductionCompany: async (_: any, { id }: any, { db }: { db: Knex }) => {
    let company;

    try {
      await db
        .select(`*`)
        .from(Tables.PRODUCTION_COMPANIES)
        .where({ id })
        .then((dbCompany) => {
          company = dbCompany[0];
        });
    } catch (knexError) {
      console.error(knexError);
    }

    return company;
  },
};
