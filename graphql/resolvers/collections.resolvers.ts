import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { paginatedDbSEARCH } from '../../lib/paginatedDbSEARCH.lib';
import { serverErrorReducer } from '../../lib/serverErrorReducer.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { validateSearchParams } from '../../lib/validateSearchParams';
import { Collection, GetCollectionsResponse, Pagination, PaginationInput } from '../../types/generated.types';
import { Tables } from '../../types/tables.enum';

export const collectionResolvers = {
  getCollections: async (
    _: any,
    { paginationInput }: { paginationInput: PaginationInput },
    { db }: { db: Knex }
  ): Promise<GetCollectionsResponse> => {
    let collections!: Collection[];
    let pagination: Pagination = {
      total: 0,
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
      const [total, dbCollections] = await paginatedDbGET<Collection>({
        db,
        offset,
        amount,
        table: Tables.COLLECTIONS,
      });
      collections = dbCollections;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      collections = [];
    }

    return { collections, pagination };
  },

  getCollection: async (_: any, { id }: any, { db }: { db: Knex }) => {
    let collection;

    try {
      await db
        .select(`*`)
        .from(Tables.COLLECTIONS)
        .where({ id })
        .then((dbCollection) => {
          collection = dbCollection[0];
        });
    } catch (knexError) {
      console.error(knexError);
    }

    return collection;
  },

  searchCollectionsByKeyValue: async (_: any, { searchInput }: { searchInput: any }, { db }: { db: Knex }) => {
    let collections!: Collection[];
    let pagination: Pagination = {
      total: NaN,
    };

    const paginationInput = searchInput?.paginationInput;
    const offset = paginationInput?.offset ?? NaN;
    const amount = paginationInput?.amount ?? NaN;
    const searchKey = searchInput?.searchKey;
    const value = searchInput?.value;

    const { valid, errors, messages } = serverErrorReducer([
      validatePagination({ offset, amount }),
      await validateSearchParams({ searchInput, db, table: Tables.COLLECTIONS }),
    ]);

    if (!valid) {
      throw new UserInputError(`${errors} errors`, {
        errors,
        messages,
      });
    }

    try {
      const [total, dbCollections] = await paginatedDbSEARCH<Collection>({
        db,
        offset,
        amount,
        table: Tables.COLLECTIONS,
        searchKey,
        value,
      });
      collections = dbCollections;
      pagination = repaginate({ total });
    } catch (knexError) {
      console.error(knexError);
      collections = [];
    }

    return { collections, pagination };
  },
};
