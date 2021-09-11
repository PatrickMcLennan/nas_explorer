import { Box, Typography, makeStyles, Theme } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import clsx from 'clsx';
import CreateAccountForm from '../components/CreateAccountForm/CreateAccountForm';
import { SEO } from '../components/SEO/SEO';
import { useRegisterUserMutation } from '../hooks/generated.hooks';
import { CreateAccountFormType } from '../validators/createAccoount.validator';
import { useRouter } from 'next/router';
import { useUser } from '../stores/user.store';
import { RegisterUserMutation, User } from '../types/generated.types';

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

export default function CreateAccount() {
  const classes = useStyles();
  const router = useRouter();
  const { setUser } = useUser(({ setUser }) => ({ setUser }));

  const [registerUser, { loading, error }] = useRegisterUserMutation({
    onCompleted: ({ registerUser }: RegisterUserMutation) => {
      setUser({
        id: registerUser?.id ?? ``,
        email: registerUser?.email ?? ``,
        name: registerUser?.name ?? ``,
      });
      return router.push(`/`);
    },
    onError: (err) => {
      if (process.env.NODE_ENV !== `production`) console.error(err);
    },
  });

  const onSubmit = (formValues: CreateAccountFormType) =>
    registerUser({
      variables: {
        user: {
          email: formValues.email,
          password: formValues.password,
          name: formValues.name,
        },
      },
    });

  return (
    <>
      <SEO title="Register | " description="Create an account for NAS Netflix" image="/not-found-backgrounds.jpeg" />
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
            Register
          </Typography>
          <CreateAccountForm loading={loading} onSubmit={onSubmit} />
        </Box>
      </Box>
    </>
  );
}
