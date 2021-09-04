import { ApolloClient, InMemoryCache } from '@apollo/client';

export const browserGraphQl = new ApolloClient({
  uri: `/api/graphql`,
  cache: new InMemoryCache(),
});
