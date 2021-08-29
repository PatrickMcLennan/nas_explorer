import Knex from 'knex';
import { Tables } from '../types/tables.enum';

type Props = {
  db: Knex;
  offset?: number;
  amount: number;
  table: Tables;
};

export const paginatedDbGET = async <T>({ db, offset, amount, table }: Props): Promise<[{ count: number }, T[]]> => {
  let get: any;

  if (!Number.isNaN(offset) && !Number.isNaN(amount)) {
    get = await Promise.all([
      db.count(`* as count`).from(table).first(),
      db
        .select(`*`)
        .from(table)
        .offset(offset ?? NaN)
        .limit(amount),
    ]);
  } else {
    get = await Promise.all([db.count(`* as count`).from(table).first(), db.select(`*`).from(table)]);
  }

  return get;
};
