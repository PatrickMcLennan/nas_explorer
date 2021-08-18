import * as Knex from 'knex';
import { awsAxiosClient } from '../../clients/awsAxios.client';
import { Tables } from '../../types/tables.enum';

export async function seed(knex: Knex): Promise<void> {
  let movies;

  try {
    const dynamoMovies = await awsAxiosClient({
      method: `GET`,
      url: `/movies`,
    });
    movies = dynamoMovies.data;
  } catch (axiosError) {
    console.error(`Error serializing AWS response: \n${axiosError}`);
  }

  try {
    await knex(Tables.MOVIES).insert(movies);
  } catch (seedError) {
    console.error(`Error seeding knex: \n${seedError}`);
  }
}
