import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .alterTable(Tables.MOVIES, (table) => {
      table.boolean(`adult`).notNullable();
      table.string(`backdropPath`);
      table.string(`collection`);
      table.bigInteger(`budget`).notNullable();
      table.specificType(`genres`, `TEXT[]`);
      table.string(`homepage`);
      table.string(`imdbId`);
      table.string(`originalLanguage`).notNullable();
      table.string(`originalTitle`).notNullable();
      table.text(`overview`);
      table.float(`popularity`);
      table.string(`posterPath`);
      table.specificType(`productionCountries`, `TEXT[]`);
      table.specificType(`productionCompanies`, `TEXT[]`);
      table.string(`releaseDate`).notNullable();
      table.bigInteger(`revenue`).notNullable();
      table.integer(`runtime`);
      table.specificType(`spokenLanguages`, `TEXT[]`);
      table.string(`status`).notNullable();
      table.string(`tagline`);
      table.string(`title`).notNullable();
      table.specificType(`trailers`, `TEXT[]`);
      table.boolean(`video`);
      table.float(`voteAverage`);
      table.integer(`voteCount`);
    })
    .then();
}

export async function down(knex: Knex): Promise<void> {
  Promise.all(
    [
      `id`,
      `adult`,
      `backdropPath`,
      `collection`,
      `budget`,
      `genres`,
      `homepage`,
      `imdbId`,
      `originalLanguage`,
      `originalTitle`,
      `overview`,
      `popularity`,
      `posterPath`,
      `productionCountries`,
      `productionCompanies`,
      `releaseDate`,
      `revenue`,
      `runtime`,
      `spokenLanguages`,
      `status`,
      `title`,
      `trailers`,
      `video`,
      `voteAverage`,
      `voteCount`,
    ].map((column) =>
      knex.schema.hasColumn(Tables.MOVIES, column).then((hasColumn) => {
        if (hasColumn) {
          return knex.schema.alterTable(Tables.MOVIES, (table) => table.dropColumn(column));
        } else {
          return;
        }
      })
    )
  );
}
