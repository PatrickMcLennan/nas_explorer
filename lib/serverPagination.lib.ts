import { PaginationInput } from '../types/generated.types';
import { ServerValidation } from '../types/serverValidation.types';

export const validatePagination = ({ offset, amount }: PaginationInput): ServerValidation => {
  let valid = true;
  let errors = 0;
  let messages = [];

  if ((Number.isNaN(offset) && !Number.isNaN(amount)) || (Number.isNaN(amount) && !Number.isNaN(offset))) {
    valid = false;
    messages.push(
      `Either both amount and offset need to be provided or neither, ${offset} was provided for offset and ${amount} was provided for amount.`
    );
    errors += 1;
  }

  if ((!!offset && offset < 0) || (!!amount && amount < 0)) {
    valid = false;
    messages.push(
      `Neither offset nor amount can be a negative integer, ${offset} was provided for offset and ${amount} was provided for amount.`
    );
    errors += 1;
  }

  return {
    valid,
    errors,
    messages,
  };
};

export const repaginate = ({ total }: { total: { count: string } }) => ({
  total: Number(total?.count ?? 0),
});
