import { Button, makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';
import InfoIcon from '@material-ui/icons/Info';

type Props = {
  onClick: (_: any) => any;
  accent: boolean;
  className?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: `rgba(109, 109, 110, 0.7)`,
    fontSize: `1.6rem`,
    textTransform: `none`,
    padding: `1rem 3rem 1rem 2.5rem`,

    '& .MuiButton-label': {
      display: `flex`,
      alignItems: `center`,
    },
  },

  accent: {
    backgroundColor: `rgba(255,255,255)`,
    color: theme.palette.secondary.main,
  },

  svg: {
    marginRight: `1rem`,
  },
}));

export const MoreInfoButton = ({ onClick, accent = false, className }: Props) => {
  const classes = useStyles();
  return (
    <Button className={clsx(classes.button, accent && classes.accent, className && className)} onClick={onClick}>
      <InfoIcon className={classes.svg} fontSize="large" />
      More Info
    </Button>
  );
};
