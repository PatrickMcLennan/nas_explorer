import { ServerValidation } from '../types/serverValidation.types';

export const serverErrorReducer = (validations: ServerValidation[]) => {
  const { valid, errors, messages } = validations.reduce(
    (all: ServerValidation, current: ServerValidation): ServerValidation => {
      if (!current.valid && !!all.valid) {
        Object.assign(all, { valid: false });
      }

      all.errors += current.errors;

      all.messages.concat(current.messages);

      return all;
    },
    {
      valid: true,
      errors: 0,
      messages: [],
    }
  );

  return {
    valid,
    errors,
    messages,
  };
};
