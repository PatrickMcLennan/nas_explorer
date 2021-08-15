import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Image {
    name: String!
  }

  type Query {
    getImages(page: Int!): [Image]
  }
`;
