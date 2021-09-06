import { Box, Typography, makeStyles, Theme, Button } from '@material-ui/core';
import { PostgresMovie } from '../../types/generated.types';
import { formatTmdbImageUrl } from '../../lib/formatTmdbImageUrl.lib';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';

type Props = {
  movies: PostgresMovie[];
  heading: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    marginBottom: `1rem`,
    marginLeft: theme.spacing(6),
  },

  poster: {
    borderRadius: `.4rem`,
  },

  slide: {
    '&:first-of-type': {
      marginLeft: theme.spacing(6),
    },
  },
}));

export const MovieSwiper = ({ movies, heading }: Props) => {
  const classes = useStyles();
  return (
    <Box component="section">
      <Typography className={classes.heading} variant="h3" component="h3">
        {heading}
      </Typography>
      <AliceCarousel
        mouseTracking
        items={movies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id} passHref>
            <Button className={classes.slide} component="a">
              <img
                className={classes.poster}
                src={formatTmdbImageUrl(`/w200/${movie.posterPath}`)}
                alt={movie.title}
                title={`Go to ${movie.title} page`}
              />
            </Button>
          </Link>
        ))}
        responsive={{
          0: {
            items: 5.5,
          },
        }}
      />
    </Box>
  );
};
