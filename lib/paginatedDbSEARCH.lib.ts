import Knex from 'knex';
import { Tables } from '../types/tables.enum';

type Props = {
  db: Knex;
  offset?: number;
  amount: number;
  table: Tables;
  searchKey: string;
  value: string;
};

export const paginatedDbSEARCH = async <T>({
  db,
  offset,
  amount,
  table,
  searchKey,
  value,
}: Props): Promise<[{ count: number }, T[]]> => {
  let get: any;

  if (!Number.isNaN(offset) && !Number.isNaN(amount)) {
    get = await Promise.all([
      db
        .count(`* as count`)
        .from(table)
        .where({ [searchKey]: value })
        .orWhere(searchKey, `ILIKE`, `%${value}%`)
        .first(),
      db
        .select(`*`)
        .from(table)
        .where({ [searchKey]: value })
        .orWhere(searchKey, `ILIKE`, `%${value}%`)
        .offset(offset ?? NaN)
        .limit(amount),
    ]);
  } else {
    get = await Promise.all([
      db
        .count(`* as count`)
        .from(table)
        .where({ [searchKey]: value })
        .orWhere(searchKey, `ILIKE`, `%${value}%`)
        .first(),
      db
        .select(`*`)
        .from(table)
        .where({ [searchKey]: value })
        .orWhere(searchKey, `ILIKE`, `%${value}%`),
    ]);
  }

  return get;
};
