import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Image {
    name: String!
  }

  type DynamoMovie {
    title:  String!
    tmdbId: String!
    id: String!
    mediaType: String!
  }

  type Query {
    getImages(page: Int!): [Image]
    getDynamoMovies: [DynamoMovie]
  }
`;
