import * as yup from 'yup';

export type CreateAccountDto = {
  name: string;
  password: string;
  email: string;
};

export type CreateAccountFormType = {
  name: string;
  password: string;
  passwordConfirm: string;
  email: string;
};

export const errorMessages = {
  noName: `A first + last name is required`,
  noEmail: `An email is required`,
  invalidEmail: `This is an invalid email`,
  noPassword: `A password is required`,
  invalidPassword: `A valid password must be at least 6 characters`,
  invalidConfirm: `Your password confirmation doesn't match your password`,
  noConfirm: `Confirm your password here`,
};

export const createAccountFormValidator: yup.SchemaOf<CreateAccountFormType> = yup.object().shape({
  name: yup.string().required(errorMessages.noName),
  email: yup.string().email(errorMessages.invalidEmail).required(errorMessages.noEmail),
  password: yup.string().min(6, errorMessages.invalidPassword).required(errorMessages.noPassword),
  passwordConfirm: yup
    .string()
    .min(6, errorMessages.invalidPassword)
    .required(errorMessages.noPassword)
    .oneOf([yup.ref(`password`)], errorMessages.invalidConfirm)
    .required(errorMessages.noConfirm),
});

export const createAccountDto: yup.SchemaOf<CreateAccountDto> = yup.object().shape({
  name: yup.string().required(errorMessages.noName),
  email: yup.string().email(errorMessages.invalidEmail).required(errorMessages.noEmail),
  password: yup.string().min(6, errorMessages.invalidPassword).required(errorMessages.noPassword),
});
