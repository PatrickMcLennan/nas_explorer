import * as yup from 'yup';

export type LoginDto = {
  email: string;
  password: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};

export const errorMessages = {
  noEmail: `An email is required`,
  invalidEmail: `This is an invalid email`,
  noPassword: `A password is required`,
  invalidPassword: `A valid password must be at least 6 characters`,
};

export const loginValidator: yup.SchemaOf<LoginDto> = yup.object().shape({
  email: yup.string().email(errorMessages.invalidEmail).required(errorMessages.noEmail),
  password: yup.string().min(6, errorMessages.invalidPassword).required(errorMessages.noPassword),
});
