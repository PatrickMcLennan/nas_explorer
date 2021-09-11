import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { paginatedDbSEARCH } from '../../lib/paginatedDbSEARCH.lib';
import { serverErrorReducer } from '../../lib/serverErrorReducer.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { validateSearchParams } from '../../lib/validateSearchParams';
import { Pagination, ProductionCountry } from '../../types/generated.types';
import { Tables } from '../../types/tables.enum';

export const productionCountryResolvers = {
  getProductionCountries: async (_: any, { paginationInput }: any, { db }: { db: Knex }) => {
    let productionCountries: ProductionCountry[];
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
      const [total, dbProductionCountries] = await paginatedDbGET<ProductionCountry>({
        db,
        offset,
        amount,
        table: Tables.PRODUCTION_COUNTRIES,
      });

      productionCountries = dbProductionCountries;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      productionCountries = [];
    }

    return { productionCountries, pagination };
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
  searchProductionCountriesByKeyValue: async (_: any, { searchInput }: { searchInput: any }, { db }: { db: Knex }) => {
    let productionCountries: ProductionCountry[];
    let pagination: Pagination = {
      total: NaN,
    };
    const paginationInput = searchInput?.paginationInput;
    const offset = paginationInput?.offset ?? NaN;
    const amount = paginationInput?.amount ?? NaN;
    const searchKey = searchInput?.searchKey;
    const value = searchInput?.value;

    const validPagination = validatePagination({ offset, amount });
    const validSearchParams = await validateSearchParams({ searchInput, db, table: Tables.PRODUCTION_COUNTRIES });

    const { valid, errors, messages } = serverErrorReducer([validPagination, validSearchParams]);

    if (!valid) {
      throw new UserInputError(`${errors} errors`, {
        errors,
        messages,
      });
    }

    try {
      const [total, dbProductionCountries] = await paginatedDbSEARCH<ProductionCountry>({
        db,
        offset,
        amount,
        table: Tables.PRODUCTION_COUNTRIES,
        searchKey,
        value,
      });
      productionCountries = dbProductionCountries;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      productionCountries = [];
    }

    return { productionCountries, pagination };
  },
};
