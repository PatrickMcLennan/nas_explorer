import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable(Tables.MOVIES);

  if (!hasTable) {
    return knex.schema
      .createTable(Tables.MOVIES, (table) => {
        table.string(`id`).primary();
        table.string(`title`).notNullable();
        table.string(`mediaType`).notNullable();
        table.string(`tmdbId`).notNullable();
      })
      .then();
  }
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTableIfExists(Tables.MOVIES);
}
