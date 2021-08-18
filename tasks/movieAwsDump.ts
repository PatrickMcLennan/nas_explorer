/**
 * Scan local dir for all movies, compare against what's currently in Dynamo,
 * POST the new movies
 */
import { promises } from 'fs';
import { awsAxiosClient } from '../clients/awsAxios.client';
import { MOVIES_DIR } from '../env';
import path from 'path';
import getTmdbId from '../lib/getTmdbId.lib';
import { DynamoMovie } from '../types/generated.types';

async function dumpMovies() {
  const movieExtMap = new Map([
    [`.avi`, null],
    [`.mp3`, null],
    ['.mp4', null],
    [`.mkv`, null],
  ]);
  let movies;

  try {
    const allFiles = await promises.readdir(MOVIES_DIR?.toString?.() ?? ``);
    movies = allFiles.reduce((all: { title: string; tmdbId: string }[], current: string) => {
      if (!movieExtMap.has(path.extname(current))) return all;
      const tmdbId = getTmdbId(current);
      if (!tmdbId) return all;
      return [...all, { title: current, tmdbId }];
    }, []);
  } catch (dirError) {
    console.error(`There was a problem reading ${MOVIES_DIR}: \n${dirError}`);
    return process.exit(1);
  }

  const dynamoMovieMap = new Map<string, null>();

  try {
    const { data } = await awsAxiosClient({
      method: `GET`,
      url: `/movies`,
    });
    data.forEach(({ tmdbId }: DynamoMovie) => dynamoMovieMap.set(tmdbId, null));
  } catch (dynamoGetError) {
    console.error(`Error fetching new movies and creating map: \n${dynamoGetError}`);
    return process.exit(1);
  }

  let newMovies;

  try {
    newMovies = movies.filter(({ tmdbId }) => {
      if (!dynamoMovieMap.has(tmdbId)) {
        dynamoMovieMap.delete(tmdbId);
        return true;
      } else {
        return false;
      }
    });
  } catch (movieFilterError) {
    console.error(`Error comparing the hdd movies to dynamo: \n${movieFilterError}`);
    return process.exit(1);
  }

  try {
    await awsAxiosClient({
      method: `POST`,
      url: `/movies`,
      data: {
        movies: newMovies,
      },
    });
    return process.exit(0);
  } catch (dynamoPostError) {
    console.error(`Error returned from axios + aws: \n${dynamoPostError}`);
    return process.exit(1);
  }
}

dumpMovies();
