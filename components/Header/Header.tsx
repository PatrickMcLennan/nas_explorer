import { makeStyles, Box, List, Link as MuiLink, Typography, ListItem, Theme } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: `flex`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: theme.spacing(0, 6),
  },
  link: {
    color: `white`,
    fontSize: `1.4rem`,
    lineHeight: `1.7rem`,
  },
  list: {
    display: `flex`,
    justifyContent: `flex-start`,
  },
  logo: {
    width: `10rem`,
    height: `5.5rem`,
    marginRight: `2.5rem`,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header} component="header">
      <Link href="/">
        <img className={classes.logo} src="/netflixLogo.png" alt="Netflix Logo" title="Return to home page" />
      </Link>
      <Box component="nav">
        <List className={classes.list}>
          <ListItem>
            <Link href="/" passHref>
              <Typography className={classes.link} component={MuiLink} noWrap>
                Home
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/tv-shows" passHref>
              <Typography className={classes.link} component={MuiLink} noWrap>
                TV Shows
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/movies" passHref>
              <Typography className={classes.link} component={MuiLink} noWrap>
                Movies
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/collections" passHref>
              <Typography className={classes.link} component={MuiLink} noWrap>
                Collections
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/new-popular" passHref>
              <Typography className={classes.link} component={MuiLink} noWrap>
                New &amp; Popular
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/my-list" passHref>
              <Typography className={classes.link} component={MuiLink} noWrap>
                My List
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
