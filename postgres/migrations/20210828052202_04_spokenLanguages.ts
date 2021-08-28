import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable(Tables.SPOKEN_LANGUAGES);

  if (!hasTable) {
    return knex.schema
      .createTable(Tables.SPOKEN_LANGUAGES, (table) => {
        table.string(`id`, 36).primary();
        table.timestamp(`createdAt`).defaultTo(knex.fn.now()).notNullable();
        table.timestamp(`updatedAt`).defaultTo(knex.fn.now()).notNullable();
        table.string(`iso_639_1`, 4).notNullable();
        table.string(`name`);
        table.string(`englishName`);
      })
      .then();
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(Tables.SPOKEN_LANGUAGES);
}
