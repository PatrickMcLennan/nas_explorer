import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable(Tables.PRODUCTION_COMPANIES);

  if (!hasTable) {
    return knex.schema
      .createTable(Tables.PRODUCTION_COMPANIES, (table) => {
        table.string(`id`, 36).primary();
        table.timestamp(`createdAt`).defaultTo(knex.fn.now()).notNullable();
        table.timestamp(`updatedAt`).defaultTo(knex.fn.now()).notNullable();
        table.string(`name`).notNullable();
        table.string(`tmdbId`).notNullable();
        table.string(`logoPath`);
        table.string(`originCountry`).notNullable();
      })
      .then();
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(Tables.PRODUCTION_COMPANIES);
}
