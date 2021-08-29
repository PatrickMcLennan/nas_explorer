import { gql } from 'graphql-request';
import type { NextPage } from 'next';
import { useState } from 'react';
import { nodeGraphQl } from '../clients/nodeGraphql.client';
import { Banner } from '../components/Banner/Banner';
import { Header } from '../components/Header/Header';
import { MovieSwiper } from '../components/MovieSlider/MovieSlider';
import { GetPostgresMoviesQuery, PostgresMovie } from '../types/generated.types';

type Props = {
  movies: PostgresMovie[];
  error: boolean;
};

const Home: NextPage<Props> = ({ movies }) => {
  const [randomMovie, setRandomMovie] = useState(movies[Math.floor(Math.random() * movies.length)]);
  return (
    <>
      <Header />
      <Banner movie={randomMovie} />
      <MovieSwiper movies={movies.slice(0, 10)} heading="Genre Name" />
    </>
  );
};

export default Home;

export const getStaticProps = async () =>
  nodeGraphQl
    .request(
      gql`
        query getPostgresMovies {
          getPostgresMovies {
            postgresMovies {
              id
              title
              posterPath
              backdropPath
              overview
              trailers
            }
          }
        }
      `
    )
    .then(({ getPostgresMovies }: GetPostgresMoviesQuery) => ({
      props: {
        movies: getPostgresMovies?.postgresMovies,
        error: false,
      },
    }))
    .catch((err) => {
      console.error(err.response.errors);
      return {
        props: {
          movies: [],
          error: true,
        },
      };
    });
