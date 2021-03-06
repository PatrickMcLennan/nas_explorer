import { Box, makeStyles, Theme, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import clsx from 'clsx';
import { useUser } from '../stores/user.store';
import LoginForm from '../components/LoginForm/LoginForm';
import { SEO } from '../components/SEO/SEO';
import { useLoginMutation } from '../hooks/generated.hooks';
import { useRouter } from 'next/router';
import { LoginFormType } from '../validators/login.validator';

const useStyles = makeStyles((theme: Theme) => ({
  alert: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    fontSize: `1.6rem`,
    width: `100%`,
  },

  stretch: {
    position: `absolute`,
    display: `block`,
    top: `0`,
    right: `0`,
    bottom: `0`,
    left: `0`,
    height: `100vh`,
    width: `100vw`,
  },
  image: {
    objectFit: `cover`,
    zIndex: -999,
  },
  fade: {
    zIndex: -998,
    backgroundColor: `rgba(0,0,0,.5)`,
  },
  formWrapper: {
    backgroundColor: `rgba(0,0,0,.75)`,
    margin: `0 auto`,
    minWidth: `38rem`,
    width: `45rem`,
    padding: `6rem`,
  },
  h1: {
    fontSize: `3.2rem`,
    fontWeight: 700,
    marginBottom: `2.8rem`,
  },
  layout: {
    minWidth: `38rem`,
    width: `45rem`,
    margin: `0 auto`,
  },

  snackbarWrapper: {
    margin: theme.spacing(8, 1),
    minHeight: `4.8rem`,
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const { setUser } = useUser(({ setUser }) => ({ setUser }));
  const router = useRouter();

  const [loginMutation, { loading, error }] = useLoginMutation({
    onCompleted: ({ login }) => {
      setUser({ email: login?.email, id: login?.id, name: login?.name });
      return router.push(`/`);
    },
    onError: (error) => {
      if (process.env.NODE_ENV !== `production`) console.error(error);
    },
  });

  const onSubmit = (loginForm: LoginFormType) =>
    loginMutation({
      variables: {
        user: {
          ...loginForm,
        },
      },
    });
  return (
    <>
      <SEO title="Log In | " description="Log in to NAS Netflix" image="/not-found-backgrounds.jpeg" />
      <img className={clsx(classes.stretch, classes.image)} src="/not-found-background.jpeg" />
      <Box className={clsx(classes.stretch, classes.fade)} aria-hidden="true" />
      <Box className={classes.layout}>
        <Box className={classes.snackbarWrapper}>
          {error && (
            <Alert className={classes.alert} severity="error">
              {error.message}
            </Alert>
          )}
        </Box>
        <Box className={classes.formWrapper}>
          <Typography className={classes.h1} variant="h1" component="h1">
            Sign In
          </Typography>
          <LoginForm onSubmit={onSubmit} loading={loading} />
        </Box>
      </Box>
    </>
  );
}
