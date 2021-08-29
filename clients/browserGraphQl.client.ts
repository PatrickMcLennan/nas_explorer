import { ApolloClient, InMemoryCache } from '@apollo/client';

export const browserGraphQl = new ApolloClient({
  uri: `http://localhost:4000/api/graphql`,
  cache: new InMemoryCache(),
});
