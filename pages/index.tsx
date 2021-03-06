import { gql } from 'graphql-request';
import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { nodeGraphQl } from '../clients/nodeGraphql.client';
import { Banner } from '../components/Banner/Banner';
import { MovieSwiper } from '../components/MovieSlider/MovieSlider';
import { SEO } from '../components/SEO/SEO';
import { Pagination, PostgresMovie } from '../types/generated.types';

type Props = {
  postgresMovies: PostgresMovie[];
  pagination: Pagination;
};

const Home: NextPage<Props> = ({ postgresMovies, pagination }: Props) => {
  const [randomMovie, setRandomMovie] = useState(postgresMovies[Math.floor(Math.random() * postgresMovies.length)]);
  let currentTimeout = useRef<any>();

  const changeMovie = useCallback(
    () => setRandomMovie(postgresMovies[Math.floor(Math.random() * postgresMovies.length)]),
    []
  );

  useEffect(() => {
    clearTimeout(currentTimeout.current);
    currentTimeout.current = setTimeout(changeMovie, 15000);
    return () => clearTimeout(currentTimeout.current);
  }, [randomMovie]);

  return (
    <>
      <SEO title="" description="View and watch all the media on this NAS" image="/not-found-background.jpeg" />
      <Banner movie={randomMovie} />
      <MovieSwiper movies={postgresMovies.slice(0, 10)} heading="Genre Name" />
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
              ... on PostgresMovie {
                adult
                backdropPath
                collection
                budget
                createdAt
                updatedAt
                fileName
                genres
                homepage
                id
                tmdbId
                imdbId
                logoPath
                originalLanguage
                originalTitle
                overview
                popularity
                posterPath
                productionCompanies
                productionCountries
                releaseDate
                revenue
                runtime
                spokenLanguages
                status
                tagline
                title
                trailers
                video
                voteAverage
                voteCount
              }
            }
            pagination {
              total
            }
          }
        }
      `,
      {
        paginationInput: {
          amount: 50,
          offset: 0,
        },
      }
    )
    .then(({ getPostgresMovies }) => {
      return {
        props: {
          postgresMovies: getPostgresMovies.postgresMovies,
          pagination: getPostgresMovies.pagination,
        },
      };
    })
    .catch((err) => console.error(err));
