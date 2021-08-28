import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable(Tables.MOVIE_TRAILERS);

  if (!hasTable) {
    return knex.schema
      .createTable(Tables.MOVIE_TRAILERS, (table) => {
        table.string(`id`, 36).primary();
        table.timestamp(`createdAt`).defaultTo(knex.fn.now()).notNullable();
        table.timestamp(`updatedAt`).defaultTo(knex.fn.now()).notNullable();
        table.string(`iso_639_1`, 4);
        table.string(`iso_3166_1`, 4);
        table.string(`name`);
        table.string(`key`);
        table.string(`site`);
        table.integer(`size`);
        table.string(`type`);
        table.boolean(`official`);
        table.timestamp(`publishedAt`);
        table.string(`tmdbId`);
      })
      .then();
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(Tables.MOVIE_TRAILERS);
}
