import { Box, makeStyles, Typography, Theme, IconButton, useTheme, useMediaQuery } from '@material-ui/core';
import { formatTmdbImageUrl } from '../../lib/formatTmdbImageUrl.lib';
import { Collection, PostgresMovie } from '../../types/generated.types';
import { PlayButton } from '../PlayButton/PlayButton';
import { MoreInfoButton } from '../MoreInfoButton/MoreInfoButton';
import { useSearchMovieTrailersByKeyValueLazyQuery } from '../../hooks/generated.hooks';
import { useEffect, useMemo } from 'react';
import { useCurrentlyPlaying } from '../../stores/currentlyPlaying.store';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { motion } from 'framer-motion';

type Props = {
  movie?: PostgresMovie;
  collection?: Collection;
  hideDescription?: boolean;
  hideMoreInfo?: boolean;
  hideLogo?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  buttonBox: {
    marginTop: `auto`,
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

  logo: {
    maxWidth: `50vw`,
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up(`sm`)]: {
      marginBottom: 0,
    },
  },

  meta: {
    display: `block`,
  },

  moreInfo: {
    marginLeft: `1.2rem`,
    marginRight: `auto`,
  },

  overview: {
    fontSize: `2.2rem`,
    lineHeight: `normal`,
    marginTop: `auto`,
    marginbottom: `2.5rem`,
    textAlign: `left`,
    maxWidth: `90%`,

    [theme.breakpoints.up(`sm`)]: {
      fontSize: `2rem`,
      maxWidth: `75%`,
    },

    [theme.breakpoints.up(`md`)]: {
      fontSize: `2.2rem`,
    },
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
  const { movie, collection, hideDescription, hideMoreInfo, hideLogo } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(`sm`));
  const { setCurrentlyPlaying } = useCurrentlyPlaying(({ setCurrentlyPlaying }) => ({ setCurrentlyPlaying }));
  const router = useRouter();

  const truncatedText = useMemo(() => {
    const overviewLength = movie?.overview?.length;
    if (!overviewLength) return ``;
    const maxTextLength = isMobile ? 100 : 300;
    return overviewLength > maxTextLength ? `${movie?.overview?.substring?.(0, maxTextLength)} ...` : movie?.overview;
  }, [movie?.overview, isMobile]);

  if (movie && !!movie?.trailers?.length) {
    const [getTrailers, { data }] = useSearchMovieTrailersByKeyValueLazyQuery({
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
          {movie?.logoPath && !hideLogo && (
            <img
              className={classes.logo}
              src={formatTmdbImageUrl(`w500/${movie?.logoPath}`)}
              alt={`${movie?.title} logo`}
            />
          )}
          {!movie?.logoPath && !hideLogo && <Typography className={clsx(classes.title)}>{movie?.title}</Typography>}
          {!hideDescription && <Typography className={clsx(classes.overview)}>{truncatedText}</Typography>}
          <Box className={classes.buttonBox}>
            <PlayButton onClick={() => router.push(`/movie/${movie.id}/play`)} accent={true} />
            {!hideMoreInfo && (
              <MoreInfoButton
                onClick={() => router.push(`/movie/${movie.id}`)}
                accent={false}
                className={classes.moreInfo}
              />
            )}
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
          {movie?.logoPath && !hideLogo && (
            <img
              className={classes.logo}
              src={formatTmdbImageUrl(`w500/${movie?.logoPath}`)}
              alt={`${movie?.title} logo`}
            />
          )}
          {!movie?.logoPath && !hideLogo && <Typography className={clsx(classes.title)}>{movie?.title}</Typography>}
          {!hideDescription && <Typography className={clsx(classes.overview)}>{collection?.overview}</Typography>}
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
