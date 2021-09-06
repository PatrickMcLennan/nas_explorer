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
import { CreateAccountFormType, createAccountFormValidator } from '../../validators/createAccoount.validator';

type Props = {
  onSubmit: (formValues: CreateAccountFormType) => any;
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

export default function CreateAccountForm({ onSubmit, loading }: Props) {
  const classes = useStyles();

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<CreateAccountFormType>({
    resolver: yupResolver(createAccountFormValidator),
  });

  return (
    <form
      className={`${classes.form} login-form`}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit((formValues: CreateAccountFormType) => {
        console.log(formValues);
        onSubmit(formValues);
      })}
    >
      <Controller
        control={control}
        name="name"
        render={({ field }) => {
          const nameError = errors?.name;
          return (
            <FormControl error={!!nameError}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input {...field} id="name" type="text" />
              <FormHelperText className={classes.formHelperText} aria-hidden={!nameError}>
                {nameError ? nameError.message : ` `}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
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
      <Controller
        control={control}
        name="passwordConfirm"
        render={({ field }) => {
          const passwordConfirmError = errors.passwordConfirm;
          return (
            <FormControl error={!!passwordConfirmError}>
              <InputLabel htmlFor="passwordConfirm">Confirm Password</InputLabel>
              <Input {...field} id="passwordConfirm" type="password" />
              <FormHelperText className={classes.formHelperText} aria-hidden={!passwordConfirmError}>
                {passwordConfirmError ? passwordConfirmError.message : ` `}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <Button className={classes.submit} type="submit">
          Register
        </Button>
      )}
      <Link href="/login" passHref>
        <Typography className={classes.createLink} component={MuiLink}>
          Already have an account? Log In here.
        </Typography>
      </Link>
    </form>
  );
}
