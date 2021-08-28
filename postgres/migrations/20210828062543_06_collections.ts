import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable(Tables.COLLECTIONS);

  if (!hasTable) {
    return knex.schema
      .createTable(Tables.COLLECTIONS, (table) => {
        table.string(`id`, 36).primary();
        table.timestamp(`createdAt`).defaultTo(knex.fn.now()).notNullable();
        table.timestamp(`updatedAt`).defaultTo(knex.fn.now()).notNullable();
        table.string(`tmdbId`);
        table.string(`name`);
        table.text(`overview`);
        table.string(`posterPath`);
        table.string(`backdropPath`);
        table.specificType(`parts`, `TEXT[]`);
      })
      .then();
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(Tables.COLLECTIONS);
}
