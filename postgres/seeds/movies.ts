import * as Knex from 'knex';
import { awsAxiosClient } from '../../clients/awsAxios.client';
import { tmdbClient } from '../../clients/tmdbClient';
import { TMDB_API_KEY } from '../../env';
import {
  Collection,
  DynamoMovie,
  Genre,
  MovieTrailer,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
} from '../../types/generated.types';
import { Tables } from '../../types/tables.enum';
import { v4 as uuidv4 } from 'uuid';
import { AxiosError, AxiosResponse } from 'axios';

export async function seed(knex: Knex): Promise<void> {
  let dynamoMovies: DynamoMovie[];

  const awsResponse = await awsAxiosClient({
    method: `GET`,
    url: `/movies`,
  }).catch((dynamoError) => {
    console.error(`Error serializing AWS response: \n${dynamoError}`);
  });
  dynamoMovies = awsResponse?.data;

  if (!dynamoMovies) {
    console.error(`No movies returned from dynamo: \n${awsResponse}`);
    return process.exit(1);
  }

  let tmdbInfo;

  try {
    tmdbInfo = await Promise.all(
      dynamoMovies.map((dynamoMovie) =>
        tmdbClient({
          url: `/movie/${dynamoMovie.tmdbId}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=videos`,
        })
          .then(({ data }: AxiosResponse) => ({
            ...data,
            id: dynamoMovie.id,
            fileName: dynamoMovie.title,
            tmdbId: dynamoMovie.tmdbId,
          }))
          .catch((err: AxiosError) => {
            if (err?.response?.status === 404) {
              console.error(`${dynamoMovie.title} with an id of ${dynamoMovie.tmdbId} was not found`);
              return {
                error: true,
              };
            }
          })
      )
    );
  } catch (tmdbError) {
    console.error(`Error getting & formatting movies from tmdb api: \n${tmdbError}`);
  }
  const collectionsMap = new Map<string, string>();

  let collections: Partial<Collection>[];

  try {
    tmdbInfo?.forEach((movie) => {
      if (movie?.belongs_to_collection?.id && !collectionsMap.has(movie?.belongs_to_collection?.id)) {
        collectionsMap.set(movie?.belongs_to_collection?.id, uuidv4());
      }
    });
    collections = await Promise.all(
      Array.from(collectionsMap, ([tmdbId, uuid]) =>
        tmdbClient({
          url: `/collection/${tmdbId}?api_key=${TMDB_API_KEY}`,
          method: `GET`,
        }).then(({ data }: AxiosResponse) => ({
          id: uuid,
          tmdbId,
          name: data?.name,
          overview: data?.overview,
          posterPath: data?.poster_path,
          backdropPath: data?.backdrop_path,
          parts: data?.parts?.map?.((part: any) => part?.id),
        }))
      )
    );
  } catch (collectionsError) {
    console.error(`Error getting all of the collections: \n${collectionsError}`);
  }

  const genresMap = new Map<string, string>();
  const productionCountriesMap = new Map<string, string>();
  const productionCompaniesMap = new Map<string, string>();
  const spokenLanguagesMap = new Map<string, string>();
  const movieTrailersMap = new Map<string, string>();

  let tables;

  try {
    tables = tmdbInfo?.reduce(
      (all, current) => {
        if (current.error) {
          return all;
        }

        const movieUuid = uuidv4();

        let genres;

        try {
          genres = current?.genres?.reduce?.((allGenres: Genre[], currentGenre: any) => {
            const tmdbId = currentGenre.id;
            if (genresMap.has(tmdbId)) {
              return allGenres;
            } else {
              const uuid = uuidv4();
              allGenres.push({
                ...currentGenre,
                id: uuid,
                tmdbId,
              });
              genresMap.set(tmdbId, uuid);
              return allGenres;
            }
          }, []);
        } catch (genresError) {
          console.error(`${current.title} could not have its genres serialized: \n${genresError}`);
          console.log(current);
        }

        let productionCountries;
        try {
          productionCountries = current?.production_countries?.reduce?.(
            (allCountries: ProductionCountry[], currentCountry: any) => {
              const iso = current.iso_3166_1;
              if (productionCountriesMap.has(iso)) {
                return allCountries;
              } else {
                const uuid = uuidv4();
                allCountries.push({
                  ...currentCountry,
                  id: uuid,
                });
                productionCountriesMap.set(iso, uuid);
                return allCountries;
              }
            },
            []
          );
        } catch (productionCountriesError) {
          console.error(
            `${current.title} could not have its production countries serialized: \n${productionCountriesError}`
          );
          console.log(current);
        }

        let productionCompanies;

        try {
          productionCompanies = current?.production_companies?.reduce?.(
            (allCompanies: ProductionCompany[], currentCompany: any) => {
              const tmdbId = current.id;
              if (productionCompaniesMap.has(tmdbId)) {
                return allCompanies;
              } else {
                const uuid = uuidv4();
                const newCompany = {
                  ...currentCompany,
                  tmdbId,
                  id: uuid,
                  logoPath: currentCompany.logo_path,
                  originCountry: currentCompany.origin_country,
                };
                delete newCompany.logo_path;
                delete newCompany.origin_country;
                allCompanies.push(newCompany);
                productionCompaniesMap.set(tmdbId, uuid);
                return allCompanies;
              }
            },
            []
          );
        } catch (productionCompaniesError) {
          console.error(
            `${current.title} could not have its production companies serialized: \n${productionCompaniesError}`
          );
          console.log(current);
        }

        let spokenLanguages;

        try {
          spokenLanguages = current?.spoken_languages?.reduce?.(
            (allLanguages: SpokenLanguage[], currentLanguage: any) => {
              const iso = current.iso_639_1;
              if (spokenLanguagesMap.has(iso)) {
                return allLanguages;
              } else {
                const uuid = uuidv4();
                const newGenre = {
                  ...currentLanguage,
                  id: uuid,
                  englishName: currentLanguage.english_name,
                };
                delete newGenre.english_name;
                allLanguages.push(newGenre);
                spokenLanguagesMap.set(iso, uuid);
                return allLanguages;
              }
            },
            []
          );
        } catch (spokenLanguagesError) {
          console.error(`${current.title} could not have its spoken languages serialized: \n${spokenLanguagesError}`);
          console.log(current);
        }

        const collectionId = current.belongs_to_collection?.id
          ? collectionsMap.get(current.belongs_to_collection.id)
          : null;

        let movieTrailers: MovieTrailer[] = [];
        try {
          movieTrailers = current?.videos?.results?.reduce((allTrailers: MovieTrailer[], currentTrailer: any) => {
            const id = currentTrailer.id;
            if (movieTrailersMap.has(id)) {
              return allTrailers;
            } else {
              const uuid = uuidv4();
              const newTrailer = {
                ...currentTrailer,
                id: uuid,
                tmdbId: id,
                publishedAt: currentTrailer.published_at,
                movieId: movieUuid,
              };
              delete newTrailer.published_at;
              allTrailers.push(newTrailer);
              movieTrailersMap.set(id, uuid);
              return allTrailers;
            }
          }, []);
        } catch (movieTrailersError) {
          console.error(`${current.title} could not have its trailers serialized: \n${movieTrailersError}`);
          console.log(current);
        }

        let movie;

        try {
          movie = {
            adult: current.adult,
            backdropPath: current.backdrop_path,
            collection: collectionId,
            budget: current.budget,
            fileName: current.fileName,
            genres: genres?.map?.((genre: Genre) => genresMap.get(genre?.tmdbId)),
            homepage: current.homepage,
            id: movieUuid,
            imdbId: current.imdbId,
            originalLanguage: current.original_language,
            originalTitle: current.original_title,
            overview: current.overview,
            popularity: current.popularity,
            posterPath: current.poster_path,
            productionCompanies: productionCompanies?.map?.((productionCompany: ProductionCompany) =>
              productionCompaniesMap.get(productionCompany?.tmdbId)
            ),
            productionCountries: productionCountries?.map?.((productionCountry: ProductionCountry) =>
              productionCountriesMap.get(productionCountry?.iso_3166_1)
            ),
            releaseDate: current.release_date,
            revenue: current.revenue,
            runtime: current.runtime,
            spokenLanguages: spokenLanguages?.map?.((spokenLanguage: SpokenLanguage) =>
              spokenLanguagesMap.get(spokenLanguage?.iso_639_1)
            ),
            status: current.status,
            tagline: current.tagline,
            title: current.title,
            tmdbId: current.tmdbId,
            trailers: movieTrailers?.map?.((movieTrailer: MovieTrailer) => movieTrailersMap.get(movieTrailer?.tmdbId)),
            video: current.video,
            voteAverage: current.vote_average,
            voteCount: current.vote_count,
          };
        } catch (movieError) {
          console.error(`${current.title} could be serialed as a movie: \n${movieError}`);
          console.log(current);
        }

        return {
          [Tables.GENRES]: genres ? [...all[Tables.GENRES], ...genres] : all[Tables.GENRES],
          [Tables.PRODUCTION_COUNTRIES]: productionCountries
            ? [...all[Tables.PRODUCTION_COUNTRIES], ...productionCountries]
            : all[Tables.PRODUCTION_COUNTRIES],
          [Tables.PRODUCTION_COMPANIES]: productionCompanies
            ? [...all[Tables.PRODUCTION_COMPANIES], ...productionCompanies]
            : all[Tables.PRODUCTION_COMPANIES],
          [Tables.SPOKEN_LANGUAGES]: spokenLanguages
            ? [...all[Tables.SPOKEN_LANGUAGES], ...spokenLanguages]
            : all[Tables.SPOKEN_LANGUAGES],
          [Tables.COLLECTIONS]: collections,
          [Tables.MOVIE_TRAILERS]: movieTrailers
            ? [...all[Tables.MOVIE_TRAILERS], ...movieTrailers]
            : all[Tables.MOVIE_TRAILERS],
          [Tables.MOVIES]: movie ? [...all[Tables.MOVIES], movie] : all[Tables.MOVIES],
        };
      },
      {
        [Tables.GENRES]: [],
        [Tables.PRODUCTION_COMPANIES]: [],
        [Tables.PRODUCTION_COUNTRIES]: [],
        [Tables.SPOKEN_LANGUAGES]: [],
        [Tables.MOVIES]: [],
        [Tables.COLLECTIONS]: [],
        [Tables.MOVIE_TRAILERS]: [],
      }
    );
  } catch (reducerError) {
    console.error(`Error trying to format the TMDB API response: \n${reducerError}`);
  }

  try {
    await knex(Tables.MOVIES).insert(tables[Tables.MOVIES]);
  } catch (moviesError) {
    console.error(`Error seeding movies: \n${moviesError}`);
  }

  try {
    await knex(Tables.GENRES).insert(tables[Tables.GENRES]);
  } catch (genresError) {
    console.error(`Error seeding genres: \n${genresError}`);
  }

  try {
    await knex(Tables.PRODUCTION_COMPANIES).insert(tables[Tables.PRODUCTION_COMPANIES]);
  } catch (companiesError) {
    console.error(`Error seeding production companies: \n${companiesError}`);
  }

  try {
    await knex(Tables.PRODUCTION_COUNTRIES).insert(tables[Tables.PRODUCTION_COUNTRIES]);
  } catch (countriesError) {
    console.error(`Error seeding production companies: \n${countriesError}`);
  }

  try {
    await knex(Tables.COLLECTIONS).insert(tables[Tables.COLLECTIONS]);
  } catch (collectionsError) {
    console.error(`Error seeding collections: \n${collectionsError}`);
  }

  try {
    await knex(Tables.MOVIE_TRAILERS).insert(tables[Tables.MOVIE_TRAILERS]);
  } catch (trailersError) {
    console.error(`Error seeding movie trailers: \n${trailersError}`);
  }

  try {
    await knex(Tables.SPOKEN_LANGUAGES).insert(tables[Tables.SPOKEN_LANGUAGES]);
  } catch (languagesError) {
    console.error(`Error seeding movie trailers: \n${languagesError}`);
  }
}
