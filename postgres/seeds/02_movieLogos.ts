import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';
import { tmdbClient } from '../../clients/tmdbClient';
import { PostgresMovie } from '../../types/generated.types';
import { TMDB_API_KEY } from '../../env';

export async function seed(knex: Knex): Promise<void> {
  const allMovies = await knex.select(`*`).from(Tables.MOVIES);
  let allLogos = await Promise.all(
    allMovies.map(async (movie: PostgresMovie) => {
      const logoResponse = await tmdbClient({
        method: `GET`,
        url: `movie/${movie.tmdbId}/images?api_key=${TMDB_API_KEY}`,
      });
      return {
        logoPath: logoResponse?.data?.logos?.[0]?.file_path,
        id: movie.id,
      };
    })
  );

  allLogos = allLogos.filter(({ logoPath }) => !!logoPath);

  await Promise.all(
    allLogos.map(async ({ id, logoPath }) => knex(Tables.MOVIES).where({ id }).update(`logoPath`, logoPath))
  );
}
