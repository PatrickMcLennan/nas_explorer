import { Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

type Props = {
  onClick: (_: any) => any;
  accent: boolean;
};

const useStyles = makeStyles(() => ({
  button: {
    fontSize: `1.6rem`,
    lineHeight: `3rem`,
    textTransform: `none`,
    padding: `1rem 3rem 1rem 2.5rem`,
    verticalAlign: `center`,
    color: `black`,

    '&:hover': {
      color: `white`,
    },
  },

  accent: {
    backgroundColor: `rgba(255,255,255)`,
  },

  svg: {
    marginRight: `1rem`,
    width: `3rem`,
    height: `3rem`,
  },
}));

export const PlayButton = ({ onClick, accent = true }: Props) => {
  const classes = useStyles();
  return (
    <Button className={clsx(classes.button, accent && classes.accent)} onClick={onClick}>
      <PlayArrowIcon className={classes.svg} fontSize="large" />
      Play
    </Button>
  );
};
