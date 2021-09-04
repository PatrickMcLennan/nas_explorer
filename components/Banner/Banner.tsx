import { Box, makeStyles, Typography, Theme, IconButton } from '@material-ui/core';
import { formatTmdbImageUrl } from '../../lib/formatTmdbImageUrl.lib';
import { Collection, PostgresMovie } from '../../types/generated.types';
import { PlayButton } from '../PlayButton/PlayButton';
import { MoreInfoButton } from '../MoreInfoButton/MoreInfoButton';
import { useSearchMovieTrailersByKeyValueLazyQuery } from '../../hooks/generated.hooks';
import { useEffect } from 'react';
import { useCurrentlyPlaying } from '../../stores/currentlyPlaying.store';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

type Props = {
  movie?: PostgresMovie;
  collection?: Collection;
};

const useStyles = makeStyles((theme: Theme) => ({
  buttonBox: {
    marginTop: `2.5rem`,
    display: `flex`,
    justifyContent: `flex-start`,
    width: `100%`,
  },
  wrapper: {
    backgroundImage: `none`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    height: `56.25vw`,
    padding: theme.spacing(1.5),
    position: `relative`,
    transition: `background-image .17s`,

    [theme.breakpoints.up(`sm`)]: {
      padding: theme.spacing(3),
    },
  },

  details: {
    display: `flex`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    flexDirection: `column`,
    height: `100%`,
    minWidth: `20rem`,
    position: `relative`,
    padding: theme.spacing(3, 4),
    zIndex: 3,
  },

  meta: {
    display: `block`,
  },

  moreInfo: {
    marginLeft: `1.2rem`,
    marginRight: `auto`,
  },

  overview: {
    fontSize: `2.3rem`,
    lineHeight: `normal`,
    marginTop: `auto`,
    textAlign: `left`,
  },

  play: {
    borderRadius: `.4rem`,
  },

  player: {
    height: `100% !important`,
    width: `100% !important`,
  },

  playerWrapper: {
    position: `absolute`,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
  },

  title: {
    marginBottom: `auto`,
    fontSize: `3rem`,
  },

  trailerButton: {},

  trailerButtons: {
    marginLeft: `auto`,
  },
}));

export const Banner = (props: Props) => {
  const { movie, collection } = props;
  const classes = useStyles();
  const { setCurrentlyPlaying, url, id } = useCurrentlyPlaying(({ setCurrentlyPlaying, url, id }) => ({
    setCurrentlyPlaying,
    url,
    id,
  }));
  const router = useRouter();

  if (movie) {
    const [getTrailers, { loading, error, data }] = useSearchMovieTrailersByKeyValueLazyQuery({
      variables: {
        searchInput: {
          searchKey: `movieId`,
          value: movie.id,
        },
      },
    });

    useEffect(() => {
      if (movie?.trailers?.length) getTrailers();
    }, [movie]);

    return (
      <Box
        className={classes.wrapper}
        component={motion.header}
        style={{
          backgroundImage: movie.backdropPath
            ? `linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,.52) 10%, rgba(0,0,0,.52) 90%, rgba(0,0,0,1) 100%), url(${formatTmdbImageUrl(
                `w500/${movie.backdropPath}`
              )})`
            : `none`,
        }}
      >
        <Box className={classes.details}>
          <Typography className={clsx(classes.title)}>{movie.title}</Typography>
          <Typography className={clsx(classes.overview)}>{movie.overview}</Typography>
          <Box className={classes.buttonBox}>
            <PlayButton onClick={() => router.push(`/movie/${movie.id}/play`)} accent={true} />
            <MoreInfoButton
              onClick={() => router.push(`/movie/${movie.id}`)}
              accent={false}
              className={classes.moreInfo}
            />
            {data?.searchMovieTrailersByKeyValue?.movieTrailers?.length && (
              <Box className={classes.trailerButtons}>
                {data?.searchMovieTrailersByKeyValue?.movieTrailers?.map?.((trailer) => (
                  <IconButton
                    className={classes.trailerButton}
                    color="secondary"
                    onClick={() =>
                      setCurrentlyPlaying(trailer?.id ?? ``, `https://www.youtube.com/watch?v=${trailer?.key ?? ``}`)
                    }
                    key={trailer?.id}
                  >
                    <YouTubeIcon fontSize="large" />
                  </IconButton>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        className={classes.wrapper}
        component={motion.header}
        style={{
          backgroundImage: collection?.backdropPath
            ? `linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,.52) 10%, rgba(0,0,0,.52) 90%, rgba(0,0,0,1) 100%), url(${formatTmdbImageUrl(
                `w500/${collection?.backdropPath}`
              )})`
            : `linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,.52) 10%, rgba(0,0,0,.52) 90%, rgba(0,0,0,1) 100%), url(/not-found-background.jpeg)`,
        }}
      >
        <Box className={classes.details}>
          <Typography className={clsx(classes.title)}>{collection?.name}</Typography>
          <Typography className={clsx(classes.overview)}>{collection?.overview}</Typography>
          <Box className={classes.buttonBox}>
            <MoreInfoButton
              onClick={() => router.push(`/collection/${collection?.id}`)}
              accent={false}
              className={classes.moreInfo}
            />
          </Box>
        </Box>
      </Box>
    );
  }
};

export const MotionBanner = motion(Banner, { forwardMotionProps: true });
