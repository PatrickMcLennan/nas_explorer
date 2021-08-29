import { UserInputError } from 'apollo-server-express';
import * as Knex from 'knex';
import { paginatedDbGET } from '../../lib/paginatedDbGET.lib';
import { repaginate, validatePagination } from '../../lib/serverPagination.lib';
import { Collection, GetCollectionsResponse, Pagination } from '../../types/generated.types';
import { Tables } from '../../types/tables.enum';

export const collectionResolvers = {
  getCollections: async (_: any, { paginationInput }: any, { db }: { db: Knex }): Promise<GetCollectionsResponse> => {
    let collections!: Collection[];
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
      const [total, dbCollections] = await paginatedDbGET<Collection>({
        db,
        offset,
        amount,
        table: Tables.COLLECTIONS,
      });
      collections = dbCollections;
      pagination = repaginate({ paginationInput, total });
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
};
