import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export const collectionResolvers = {
  getCollections: async (_: any, __: any, { db }: { db: Knex }) => {
    let collections;

    try {
      await db
        .select(`*`)
        .from(Tables.COLLECTIONS)
        .then((dbCollections) => {
          collections = dbCollections;
        });
    } catch (knexError) {
      console.error(knexError);
      collections = [];
    }

    return collections;
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
