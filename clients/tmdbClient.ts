import axios from 'axios';

export const tmdbClient = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});
