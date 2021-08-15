/**
 * Scan local dir for all movies, send to AWS to update DynamoDB
 */
import { promises } from 'fs';
import { awsAxiosClient } from '../clients/awsAxios.client';
import { MOVIES_DIR } from '../env';
import path from 'path';
import getTmdbId from '../lib/getTmdbId.lib';

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

  try {
    await awsAxiosClient({
      method: `POST`,
      url: `/movies`,
      data: {
        movies,
      },
    });
  } catch (axiosError) {
    console.error(`Error returned from axios + aws: \n${axiosError}`);
    return process.exit(1);
  }

  return process.exit(0);
}

dumpMovies();
