import { collectionResolvers } from './collections.resolvers';
import { imageResolvers } from './image.resolvers';
import { movieResolvers } from './movie.resolvers';
import { movieTrailerResolvers } from './movieTrailers.resolvers';
import { productionCompanyResolvers } from './productionCompanies.resolvers';
import { productionCountryResolvers } from './productionCountries.resolvers';
import { spokenLangaugeResolvers } from './spokenLanguageResolvers';

export const resolvers = {
  Query: {
    ...collectionResolvers,
    ...imageResolvers,
    ...movieResolvers,
    ...movieTrailerResolvers,
    ...productionCompanyResolvers,
    ...productionCountryResolvers,
    ...spokenLangaugeResolvers,
  },
};
