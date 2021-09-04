import { GraphQLClient } from 'graphql-request';
export const nodeGraphQl = new GraphQLClient(`http://node:4000/api/graphql`);
