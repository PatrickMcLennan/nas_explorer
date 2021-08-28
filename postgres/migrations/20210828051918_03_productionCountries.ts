import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable(Tables.PRODUCTION_COUNTRIES);

  if (!hasTable) {
    return knex.schema
      .createTable(Tables.PRODUCTION_COUNTRIES, (table) => {
        table.string(`id`, 36).primary();
        table.timestamp(`createdAt`).defaultTo(knex.fn.now()).notNullable();
        table.timestamp(`updatedAt`).defaultTo(knex.fn.now()).notNullable();
        table.string(`iso_3166_1`, 4).notNullable();
        table.string(`name`).notNullable();
      })
      .then();
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(Tables.PRODUCTION_COUNTRIES);
}
