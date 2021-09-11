import { Button, Grid, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SEO } from '../components/SEO/SEO';
import { useSearchPostgresMoviesByKeyValueQuery } from '../hooks/generated.hooks';
import { Pagination, PostgresMovie } from '../types/generated.types';
import Link from 'next/link';
import { formatTmdbImageUrl } from '../lib/formatTmdbImageUrl.lib';

type State = {
  postgresMovies: PostgresMovie[];
  pagination: Pagination;
};

const useStyles = makeStyles(() => ({
  card: {},
  poster: {},
}));

export default function SearchPage() {
  const { query } = useRouter();
  const classes = useStyles();
  const [{ postgresMovies, pagination }, setResults] = useState<State>({
    postgresMovies: [],
    pagination: {
      total: NaN,
    },
  });

  useSearchPostgresMoviesByKeyValueQuery({
    variables: {
      searchInput: {
        searchKey: `title`,
        value: query?.title?.toString?.() ?? ``,
        paginationInput: {
          offset: 0,
          amount: 25,
        },
      },
    },
    onCompleted: ({ searchPostgresMoviesByKeyValue }) =>
      setResults({
        postgresMovies: (searchPostgresMoviesByKeyValue?.postgresMovies ?? []) as PostgresMovie[], // No idea why TS is bugging out over this but it is
        pagination: searchPostgresMoviesByKeyValue?.pagination ?? { total: NaN },
      }),
  });

  return (
    <>
      <SEO title="Search | " description="Search for your favourite content" image="/not-found-background.jpeg" />
      <Grid container spacing={1}>
        {postgresMovies.map((movie) => (
          <Grid item lg={2} key={movie.id}>
            <Link href={`/movie/${movie.id}`} passHref>
              <Button className={classes.card} component="a">
                <img
                  className={classes.poster}
                  src={formatTmdbImageUrl(`/w200/${movie.posterPath}`)}
                  alt={movie.title}
                />
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {},
  };
};
