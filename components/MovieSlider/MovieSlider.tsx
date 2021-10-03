import { Box, Typography, makeStyles, Theme, Button, useTheme } from '@material-ui/core';
import { PostgresMovie } from '../../types/generated.types';
import { formatTmdbImageUrl } from '../../lib/formatTmdbImageUrl.lib';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

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
  const theme = useTheme();
  return (
    <Box component="section">
      <Typography className={classes.heading} variant="h3" component="h3">
        {heading}
      </Typography>
      <Swiper
        // breakpoints={{
        //   [theme.breakpoints.values.xs]: {
        //     slidesPerView: 2.5,
        //   },
        //   [theme.breakpoints.values.sm]: {
        //     slidesPerView: 3.5,
        //   },
        //   [theme.breakpoints.values.md]: {
        //     slidesPerView: 4.5,
        //   },
        //   [theme.breakpoints.values.lg]: {
        //     slidesPerView: 5.5,
        //   },
        //   [theme.breakpoints.values.xl]: {
        //     slidesPerView: 6.5,
        //   },
        // }}
        slidesOffsetAfter={theme.spacing(12)}
        spaceBetween={10}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
