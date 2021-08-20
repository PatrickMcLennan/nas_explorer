import { awsAxiosClient } from '../../clients/awsAxios.client';
import * as Knex from 'knex';
import { Tables } from '../../types/tables.enum';
import { PostgresMovie, QueryGetPostgresMovieArgs } from '../../types/generated.types';

export const movieResolvers = {
  getDynamoMovies: async () => {
    let dynamoMovies;
    try {
      const { data } = await awsAxiosClient({
        method: `GET`,
        url: `/movies`,
      });
      dynamoMovies = data;
    } catch (movieError) {
      console.error(movieError);
      dynamoMovies = [];
    }
    return dynamoMovies;
  },

  getPostgresMovies: async (_: any, __: any, { db }: { db: Knex }) => {
    let movies;
    try {
      await db
        .select(`*`)
        .from(Tables.MOVIES)
        .then((dbMovies) => {
          movies = dbMovies;
        });
    } catch (knexError) {
      console.error(knexError);
      movies = [];
    }
    return movies;
  },

  getPostgresMovie: async (_: any, { id }: QueryGetPostgresMovieArgs, { db }: { db: Knex }) => {
    let movie;
    try {
      await db
        .select()
        .from(Tables.MOVIES)
        .where({ id })
        .then((dbMovie) => {
          movie = dbMovie?.[0] ?? {};
        });
    } catch (knexError) {
      console.error(knexError);
      movie = {};
    }
    console.log(movie);
    return movie;
  },
};
