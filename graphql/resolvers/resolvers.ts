import { imageResolvers } from './image.resolvers';

export const resolvers = {
  Query: {
    ...imageResolvers,
  },
};
