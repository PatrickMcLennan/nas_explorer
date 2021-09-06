import { Box } from '@material-ui/core';
import { gql } from 'graphql-request';
import { nodeGraphQl } from '../../clients/nodeGraphql.client';
import { Banner } from '../../components/Banner/Banner';
import { Header } from '../../components/Header/Header';
import { SEO } from '../../components/SEO/SEO';
import { GetPostgresMovieQuery, PostgresMovie } from '../../types/generated.types';

type Params = {
  id: string;
};

type PageProps = {
  movie: PostgresMovie;
  notFound: boolean;
};

export default function Movie({ movie }: PageProps) {
  return (
    <>
      <SEO
        title={`${movie.title} | `}
        description={movie?.overview ?? `Overview for ${movie.title}`}
        image={movie?.posterPath ?? movie?.backdropPath ?? `/not-found-background.jpeg`}
      />
      <Box>
        <Banner movie={movie} />
        {movie.title}
        {movie.tmdbId}
      </Box>
    </>
  );
}

export const getStaticPaths = async () =>
  nodeGraphQl
    .request(
      gql`
        query getPostgresMovies {
          getPostgresMovies {
            postgresMovies {
              id
            }
          }
        }
      `
    )
    .then(({ getPostgresMovies }) => ({
      paths: getPostgresMovies?.postgresMovies?.map?.((movie: PostgresMovie) => ({
        params: {
          id: movie?.id.toString(),
        },
      })),
      fallback: false,
    }))
    .catch((err) => {
      console.error(err);
      return {
        paths: [
          {
            params: {
              name: `404`,
              id: `404`,
            },
          },
        ],
        fallback: false,
      };
    });

export const getStaticProps = async ({ params: { id } }: { params: Params }) =>
  nodeGraphQl
    .request(
      gql`
        query getPostgresMovie($id: String!) {
          getPostgresMovie(id: $id) {
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
      `,
      { id }
    )
    .then(({ getPostgresMovie }: GetPostgresMovieQuery) => ({
      props: {
        movie: getPostgresMovie,
        notFound: false,
      },
    }))
    .catch((err) => {
      console.error(err);
      return {
        props: {
          movie: {},
          notFound: true,
        },
      };
    });
