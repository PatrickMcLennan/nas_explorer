import { collectionResolvers } from './collections.resolvers';
import { genresResolvers } from './genres.resolvers';
import { imageResolvers } from './image.resolvers';
import { movieResolvers } from './movie.resolvers';
import { movieTrailerResolvers } from './movieTrailers.resolvers';
import { productionCompanyResolvers } from './productionCompanies.resolvers';
import { productionCountryResolvers } from './productionCountries.resolvers';
import { spokenLangaugeResolvers } from './spokenLanguageResolvers';
import { userMutations } from './users.resolvers';

export const resolvers = {
  Query: {
    ...collectionResolvers,
    ...imageResolvers,
    ...genresResolvers,
    ...movieResolvers,
    ...movieTrailerResolvers,
    ...productionCompanyResolvers,
    ...productionCountryResolvers,
    ...spokenLangaugeResolvers,
  },
  Mutation: {
    ...userMutations,
  },
};
