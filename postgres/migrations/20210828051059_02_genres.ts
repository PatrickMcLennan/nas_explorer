import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable(Tables.GENRES);

  if (!hasTable) {
    return knex.schema
      .createTable(Tables.GENRES, (table) => {
        table.string(`id`, 36).primary();
        table.timestamp(`createdAt`).defaultTo(knex.fn.now()).notNullable();
        table.timestamp(`updatedAt`).defaultTo(knex.fn.now()).notNullable();
        table.string(`tmdbId`).notNullable();
        table.string(`name`).notNullable();
      })
      .then();
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(Tables.GENRES);
}
