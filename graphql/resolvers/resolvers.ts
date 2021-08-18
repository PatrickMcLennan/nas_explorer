import { imageResolvers } from './image.resolvers';
import { movieResolvers } from './movie.resolvers';

export const resolvers = {
  Query: {
    ...imageResolvers,
    ...movieResolvers,
  },
};
