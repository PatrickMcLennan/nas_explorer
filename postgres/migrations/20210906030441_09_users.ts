import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable(Tables.USERS);

  if (!hasTable) {
    return knex.schema.createTable(Tables.USERS, (table) => {
      table.string(`id`, 36).primary();
      table.timestamp(`createdAt`).defaultTo(knex.fn.now()).notNullable();
      table.timestamp(`updatedAt`).defaultTo(knex.fn.now()).notNullable();
      table.string(`email`, 345).unique().notNullable();
      table.string(`hash`).notNullable();
      table.string(`name`).notNullable();
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(Tables.USERS);
}
