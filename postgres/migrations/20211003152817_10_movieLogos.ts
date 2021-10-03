import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable(Tables.MOVIES, (table) => {
    table.string(`logoPath`, 150);
  });
}

export async function down(knex: Knex): Promise<void> {
  const hasColumn = await knex.schema.hasColumn(Tables.MOVIES, `logoPath`);
  return hasColumn ? knex.schema.alterTable(Tables.MOVIES, (table) => table.dropColumn(`logoPath`)) : Promise.resolve();
}
