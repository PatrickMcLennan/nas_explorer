import { MovieTrailer } from '../types/generated.types';

export const sortTrailersYoutube = (a: MovieTrailer, b: MovieTrailer) => {
  const reducer = (trailer: MovieTrailer) =>
    [
      trailer?.site?.toLowerCase?.() === `youtube`,
      !!trailer?.official,
      trailer?.type?.toLowerCase?.() === `trailer`,
    ].filter((rule) => !!rule).length;

  const aPoints = reducer(a);
  const bPoints = reducer(b);

  return aPoints > bPoints ? 1 : -1;
};
