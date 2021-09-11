import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { paginatedDbSEARCH } from '../../lib/paginatedDbSEARCH.lib';
import { serverErrorReducer } from '../../lib/serverErrorReducer.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { validateSearchParams } from '../../lib/validateSearchParams';
import { Pagination, ProductionCompany } from '../../types/generated.types';
import { Tables } from '../../types/tables.enum';

export const productionCompanyResolvers = {
  getProductionCompanies: async (_: any, { paginationInput }: any, { db }: { db: Knex }) => {
    let productionCompanies!: ProductionCompany[];
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
      const [total, dbProductionCompanies] = await paginatedDbGET<ProductionCompany>({
        db,
        offset,
        amount,
        table: Tables.MOVIES,
      });

      productionCompanies = dbProductionCompanies;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      productionCompanies = [];
    }

    return { productionCompanies, pagination };
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
  searchProductionCompaniesByKeyValue: async (_: any, { searchInput }: { searchInput: any }, { db }: { db: Knex }) => {
    let productionCompanies: ProductionCompany[];
    let pagination: Pagination = {
      total: NaN,
    };
    const paginationInput = searchInput?.paginationInput;
    const offset = paginationInput?.offset ?? NaN;
    const amount = paginationInput?.amount ?? NaN;
    const searchKey = searchInput?.searchKey;
    const value = searchInput?.value;

    const validPagination = validatePagination({ offset, amount });
    const validSearchParams = await validateSearchParams({ searchInput, db, table: Tables.PRODUCTION_COMPANIES });

    const { valid, errors, messages } = serverErrorReducer([validPagination, validSearchParams]);

    if (!valid) {
      throw new UserInputError(`${errors} errors`, {
        errors,
        messages,
      });
    }

    try {
      const [total, dbProductionCompanies] = await paginatedDbSEARCH<ProductionCompany>({
        db,
        offset,
        amount,
        table: Tables.PRODUCTION_COMPANIES,
        searchKey,
        value,
      });
      productionCompanies = dbProductionCompanies;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      productionCompanies = [];
    }

    return { productionCompanies, pagination };
  },
};
