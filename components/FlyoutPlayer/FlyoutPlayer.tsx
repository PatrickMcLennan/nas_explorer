import { Box, IconButton, makeStyles, Theme } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { useCurrentlyPlaying } from '../../stores/currentlyPlaying.store';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: `fixed`,
    zIndex: 9999,
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    borderRadius: `.4rem`,
    border: `.1rem solid ${theme.palette.secondary.main}`,
  },
  closeButton: {
    position: `fixed`,
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

export const FlyoutPlayer = () => {
  const classes = useStyles();
  const { url, setCurrentlyPlaying } = useCurrentlyPlaying(({ url, setCurrentlyPlaying }) => ({
    url,
    setCurrentlyPlaying,
  }));
  return (
    <AnimatePresence>
      <Box className={classes.wrapper} component={motion.div}>
        <IconButton className={classes.closeButton} color="secondary" onClick={() => setCurrentlyPlaying(``, ``)}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <ReactPlayer url={url} autoPlay controls />
      </Box>
    </AnimatePresence>
  );
};
