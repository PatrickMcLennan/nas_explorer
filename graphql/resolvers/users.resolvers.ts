import { UserInputError } from 'apollo-server-errors';
import { GraphQLContext } from '../../types/graphqlContext.types';
import { Tables } from '../../types/tables.enum';
import { CreateAccountDto } from '../../validators/createAccoount.validator';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import type { LoginDto } from '../../validators/login.validator';
import { loginValidator } from '../../validators/login.validator';
export const userMutations = {
  registerUser: async (_: any, { user }: { user: CreateAccountDto }, { db, request }: GraphQLContext) => {
    const postgresUser = await db.select(`*`).from(Tables.USERS).where({ email: user.email });

    if (postgresUser?.[0]) {
      return new UserInputError(`User with that email already exists`);
    }

    const saltRounds = 10;
    const hash = await bcrypt.hash(user.password, saltRounds);
    const id = uuid();
    Object.assign(request.session, { userId: id });

    const newUser = {
      id,
      email: user.email,
      hash,
      name: user.name,
    };

    try {
      await db.table(Tables.USERS).insert(newUser);
    } catch (error) {
      console.error(error);
    }

    return {
      id,
      email: user.email,
      name: user.name,
    };
  },

  login: async (_: any, { user }: { user: LoginDto }, { request, db }: GraphQLContext) => {
    const validForm = await loginValidator.isValid(user);
    if (!validForm) {
      return new UserInputError(`Invalid attempt`);
    }

    const postgresUser = await db.table(Tables.USERS).where({ email: user.email });
    const validUser = postgresUser?.[0];
    if (!validUser) {
      return new UserInputError(`Invalid email or password`);
    }

    const validPassword = await bcrypt.compare(user.password, postgresUser[0].hash);
    if (!validPassword) {
      return new UserInputError(`Invalid email or password`);
    }

    Object.assign(request.session, { userId: uuid() });

    return {
      id: validUser.id,
      email: validUser.email,
      name: validUser.name,
    };
  },

  logout: async (_: any, __: any, { request, response, redis }: GraphQLContext) =>
    new Promise((resolve) => {
      redis.del(request.sessionID);
      response.clearCookie(`qid`, { path: `/`, domain: `localhost` });
      return resolve({ message: `Logged Out` });
    }),
};
