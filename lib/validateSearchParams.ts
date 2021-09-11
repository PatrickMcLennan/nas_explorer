import Knex from 'knex';
import { ServerValidation } from '../types/serverValidation.types';
import { Tables } from '../types/tables.enum';

type Props = {
  searchInput: any;
  db: Knex;
  table: Tables;
};

export const validateSearchParams = async ({ searchInput, db, table }: Props): Promise<ServerValidation> => {
  const searchKey = searchInput?.searchKey;

  let valid = true;
  let errors = 0;
  let messages = [];

  if (searchKey) {
    const isValid = await db.schema.hasColumn(table, searchKey);

    if (!isValid) {
      valid = false;
      errors += 1;
      messages.push(`${searchKey} is not a column on ${table} and cannot be searched`);
    }
  }

  return {
    valid,
    errors,
    messages,
  };
};
