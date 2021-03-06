import {
  Button,
  FormHelperText,
  FormControl,
  InputLabel,
  Input,
  CircularProgress,
  makeStyles,
  Link as MuiLink,
  Theme,
  Typography,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { LoginDto, loginValidator } from '../../validators/login.validator';

type Props = {
  onSubmit: (user: LoginDto) => any;
  loading: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: `grid`,
  },
  formHelperText: {
    '&, & span': {
      height: `2rem`,
    },
  },
  submit: {
    fontSize: `1.6rem`,
    marginTop: `1.5rem`,
    padding: `1.6rem`,
    backgroundColor: theme.palette.secondary.main,
  },
  createLink: {
    fontSize: `1.6rem`,
    marginTop: `1.6rem`,
  },
}));

export default function LoginForm({ onSubmit, loading }: Props) {
  const classes = useStyles();

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<LoginDto>({
    resolver: yupResolver(loginValidator),
  });

  return (
    <form
      className={`${classes.form} login-form`}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit((user: LoginDto) => onSubmit(user))}
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => {
          const emailError = errors?.email;
          return (
            <FormControl error={!!emailError}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input {...field} id="email" type="email" />
              <FormHelperText className={classes.formHelperText} aria-hidden={!emailError}>
                {emailError ? emailError.message : ` `}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => {
          const passwordError = errors.password;
          return (
            <FormControl error={!!passwordError}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input {...field} id="password" type="password" />
              <FormHelperText className={classes.formHelperText} aria-hidden={!passwordError}>
                {passwordError ? passwordError.message : ` `}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <Button className={classes.submit} type="submit">
          Log In
        </Button>
      )}
      <Link href="/create-account" passHref>
        <Typography className={classes.createLink} component={MuiLink}>
          New to NAS Netflix? Create an account here.
        </Typography>
      </Link>
    </form>
  );
}
