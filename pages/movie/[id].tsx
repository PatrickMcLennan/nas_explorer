import { Box, Typography, makeStyles, Theme } from '@material-ui/core';
import { gql } from 'graphql-request';
import { nodeGraphQl } from '../../clients/nodeGraphql.client';
import { Banner } from '../../components/Banner/Banner';
import { SEO } from '../../components/SEO/SEO';
import { GetPostgresMovieQuery, PostgresMovie } from '../../types/generated.types';
import { formatTmdbImageUrl } from '../../lib/formatTmdbImageUrl.lib';
import clsx from 'clsx';

type Params = {
  id: string;
};

type PageProps = {
  movie: PostgresMovie;
  notFound: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    display: `flex`,
    flexDirection: `column`,
    padding: theme.spacing(3),

    [theme.breakpoints.up(`sm`)]: {
      padding: theme.spacing(3),
    },
  },

  h1: {
    gridArea: `h1`,
    fontSize: `3rem`,
    marginRight: `5vw`,
    margin: theme.spacing(1.5, 0),
  },

  header: {
    display: `flex`,
    justifyContent: `space-between`,
    border: `1px solid rgba(109, 109, 110, 0.7)`,
    padding: theme.spacing(1),
    margin: theme.spacing(3, 0),
  },

  logo: {
    width: `50%`,
    display: `block`,
    margin: `auto`,
  },

  overview: {
    fontSize: `2rem`,
    marginBottom: theme.spacing(3),

    '&:first-letter': {
      marginLeft: `5vw`,
    },
  },

  poster: {
    width: `50%`,
    display: `block`,
    margin: `0 auto`,
  },

  revenue: {
    margin: theme.spacing(3, 1),
  },

  runtime: {
    fontSize: `2rem`,
    lineHeight: `2.4rem`,
  },
}));

export default function Movie({ movie }: PageProps) {
  const classes = useStyles();

  console.log(movie);
  return (
    <>
      <SEO
        title={`${movie.title} | `}
        description={movie?.overview ?? `Overview for ${movie.title}`}
        image={movie?.posterPath ?? movie?.backdropPath ?? `/not-found-background.jpeg`}
      />
      <Banner hideDescription hideLogo hideMoreInfo movie={movie} />
      <Box className={classes.grid} component="section">
        {movie.logoPath ? (
          <img
            className={classes.logo}
            src={formatTmdbImageUrl(`w500/${movie?.logoPath}`)}
            alt={`${movie?.title} logo`}
          />
        ) : (
          <Typography className={clsx(classes.h1, `h1`)} component="h1" variant="h1">
            {movie.title}
          </Typography>
        )}
        <Box className={classes.header}>
          {!!movie.runtime && (
            <Typography className={classes.runtime}>{`${Math.floor(movie.runtime / 60)}hr ${
              movie.runtime - Math.floor(movie.runtime / 60) * 60
            } mins`}</Typography>
          )}
          {!!movie.popularity && <Typography className={classes.runtime}>{movie.popularity}</Typography>}
        </Box>
        <Typography className={clsx(classes.overview, `overview`)}>{movie.overview}</Typography>
        <img
          className={clsx(classes.poster, `poster`)}
          src={formatTmdbImageUrl(`/w300/${movie.posterPath}`)}
          alt={`Poster for ${movie.title}`}
        />
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
