import { Box, IconButton, Typography, makeStyles, Theme, Button, useTheme } from '@material-ui/core';
import { PostgresMovie } from '../../types/generated.types';
import { formatTmdbImageUrl } from '../../lib/formatTmdbImageUrl.lib';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useCallback, useRef, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

type Props = {
  movies: PostgresMovie[];
  heading: string;
};

type ButtonState = {
  prevDisabled: boolean;
  nextDisabled: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  buttonBox: {
    marginLeft: theme.spacing(6),
  },

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

SwiperCore.use([Navigation]);
export const MovieSwiper = ({ movies, heading }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [prevButton, nextButton] = [useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null)];
  const [{ prevDisabled, nextDisabled }, setButtonState] = useState<ButtonState>({
    prevDisabled: true,
    nextDisabled: false,
  });

  const buttonManager = useCallback(({ isEnd, isBeginning }: SwiperCore) => {
    const currentlyDisabled = !!prevDisabled || !!nextDisabled;
    if (!isEnd && !isBeginning && !currentlyDisabled) {
      return;
    } else if (!isEnd && !isBeginning && currentlyDisabled) {
      return setButtonState({
        prevDisabled: false,
        nextDisabled: false,
      });
    } else {
      return setButtonState({
        prevDisabled: isBeginning,
        nextDisabled: isEnd,
      });
    }
  }, []);

  return (
    <Box component="section">
      <Typography className={classes.heading} variant="h3" component="h3">
        {heading}
      </Typography>
      <Swiper
        breakpoints={{
          [theme.breakpoints.values.xs]: {
            slidesPerView: 2.5,
          },
          [theme.breakpoints.values.sm]: {
            slidesPerView: 3.5,
          },
          [theme.breakpoints.values.md]: {
            slidesPerView: 4.5,
          },
          [theme.breakpoints.values.lg]: {
            slidesPerView: 6.5,
          },
          [theme.breakpoints.values.xl]: {
            slidesPerView: 7.5,
          },
        }}
        navigation={{
          prevEl: prevButton.current!,
          nextEl: nextButton.current!,
        }}
        onSlideChange={buttonManager}
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
      <Box className={classes.buttonBox}>
        <IconButton color="primary" disabled={prevDisabled} ref={prevButton}>
          <ArrowBackIcon color="primary" />
        </IconButton>
        <IconButton color="primary" disabled={nextDisabled} ref={nextButton}>
          <ArrowForwardIcon color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
};
