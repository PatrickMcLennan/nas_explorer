import {
  makeStyles,
  Box,
  List,
  Link as MuiLink,
  Typography,
  ListItem,
  Theme,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import SearchIcon from '@material-ui/icons/Search';
import { motion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLogoutMutation } from '../../hooks/generated.hooks';

type SearchForm = {
  searchText: string;
};

const formAnimationStates = {
  closed: {
    width: `10px`,
  },
  open: {
    width: `150px`,
  },
};

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    marginLeft: `auto`,
    fontSize: `1.6rem`,
  },
  header: {
    display: `flex`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: theme.spacing(0, 6),
  },
  input: {
    fontSize: `1.4rem`,
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
  const router = useRouter();
  const { control, handleSubmit } = useForm<SearchForm>({
    defaultValues: {
      searchText: router?.query?.title?.toString?.() ?? ``,
    },
  });
  const searchValues = useWatch({
    control,
    name: `searchText`,
    defaultValue: router?.query?.title?.toString?.() ?? ``,
  });
  const [formExpanded, setFormExpanded] = useState<boolean>(!!searchValues.length);
  let debounce = useRef<any>();

  const search = useCallback(() => router.push(`/search?title=${searchValues}`), [router]);
  const user = useMemo(() => router.route !== `/login` && router.route !== `/create-account`, [router.route]);

  const [logoutMutation] = useLogoutMutation({
    onCompleted: () => router.push(`/login`),
  });

  useEffect(() => {
    clearTimeout(debounce.current);
    if (searchValues) {
      debounce.current = setTimeout(search, 350);
    }
    return () => clearTimeout(debounce.current);
  }, [searchValues]);

  return (
    <Box className={classes.header} component="header">
      <Link href="/">
        <a title="Return to homepage">
          <img className={classes.logo} src="/netflixLogo.png" alt="Netflix Logo" title="Return to home page" />
        </a>
      </Link>
      <Box component="nav">
        {user && (
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
        )}
      </Box>
      {user && (
        <motion.form
          autoComplete="off"
          className={classes.form}
          onSubmit={handleSubmit(search)}
          animate={formExpanded ? `open` : `closed`}
          variants={formAnimationStates}
          onHoverStart={() => setFormExpanded(true)}
          onHoverEnd={() => setFormExpanded(!!searchValues.length)}
        >
          <Controller
            name="searchText"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={classes.input}
                inputProps={{
                  title: 'What are you looking for?',
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton type="submit" color="primary" edge="start">
                      <SearchIcon fontSize="large" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            )}
          />
        </motion.form>
      )}
      {user && <Button onClick={() => logoutMutation()}>Logout</Button>}
    </Box>
  );
};
