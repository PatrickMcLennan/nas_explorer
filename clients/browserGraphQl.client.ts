import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export const browserGraphQl = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: process.env.NODE_ENV === `production` ? `/api/graphql` : `http://localhost:4000/api/graphql`,
    credentials: `include`,
  }),
});
