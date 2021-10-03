import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input RegisterUserInput {
    email: String!
    password: String!
    name: String!
  }

  input SearchInput {
    searchKey: String
    value: String
    paginationInput: PaginationInput
  }

  type Pagination {
    total: Int!
  }

  input PaginationInput {
    offset: Int
    amount: Int
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Collection {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    name: String!
    tmdbId: String!
    overview: String!
    posterPath: String
    backdropPath: String
    parts: [String]!
  }

  type GetCollectionsResponse {
    collections: [Collection]
    pagination: Pagination
  }

  type SearchCollectionsResponse {
    collections: [Collection]
    pagination: Pagination
  }

  type DynamoMovie {
    title: String!
    tmdbId: String!
    id: String!
    mediaType: String!
  }

  type Image {
    name: String!
  }

  type Genre {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    tmdbId: String!
    name: String!
  }

  type GetGenresResponse {
    genres: [Genre]
    pagination: Pagination
  }

  type SearchGenresResponse {
    genres: [Genre]
    pagination: Pagination
  }

  type MovieTrailer {
    id: String!
    createdAt: String!
    updatedAt: String!
    iso_639_1: Timestamp
    iso_3166_1: Timestamp
    name: String
    key: String
    site: String
    size: Int
    type: String
    official: Boolean
    publishedAt: Timestamp
    tmdbId: String!
    movieId: String!
  }

  type GetMovieTrailersReponse {
    movieTrailers: [MovieTrailer]
    pagination: Pagination
  }

  type SearchMovieTrailersResponse {
    movieTrailers: [MovieTrailer]
    pagination: Pagination
  }

  type PostgresMovie {
    adult: Boolean!
    backdropPath: String
    collection: String
    budget: BigInt!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    fileName: String!
    genres: [String]
    homepage: String
    id: String!
    tmdbId: String!
    imdbId: String
    logoPath: String
    originalLanguage: String!
    originalTitle: String!
    overview: String
    popularity: Float
    posterPath: String
    productionCompanies: [String]
    productionCountries: [String]
    releaseDate: String!
    revenue: BigInt!
    runtime: Int
    spokenLanguages: [String]
    status: String!
    tagline: String
    title: String!
    trailers: [String]
    video: Boolean!
    voteAverage: Float!
    voteCount: Int!
  }

  type GetPostgresMoviesResponse {
    postgresMovies: [PostgresMovie]
    pagination: Pagination
  }

  type SearchPostgresMoviesResponse {
    postgresMovies: [PostgresMovie]
    pagination: Pagination
  }

  type ProductionCompany {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    name: String!
    tmdbId: String!
    logoPath: String
    originCountry: String!
  }

  type GetProductionCompaniesResponse {
    productionCompanies: [ProductionCompany]
    pagination: Pagination
  }

  type SearchProductionCompaniesResponse {
    productionCompanies: [ProductionCompany]
    pagination: Pagination
  }

  type ProductionCountry {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    iso_3166_1: String!
    name: String!
  }

  type GetProductionCountriesResponse {
    productionCountries: [ProductionCountry]
    pagination: Pagination
  }

  type SearchProductionCountriesResponse {
    productionCountries: [ProductionCountry]
    pagination: Pagination
  }

  type SpokenLanguage {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    iso_639_1: String!
    name: String
    englishName: String
  }

  type GetSpokenLanguageResponse {
    spokenLanguages: [SpokenLanguage]
    pagination: Pagination
  }

  type SearchSpokenLanguagesResponse {
    spokenLanguages: [SpokenLanguage]
    pagination: Pagination
  }

  type User {
    email: String!
    hash: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    id: String!
    name: String!
  }

  type RegisterUserResponse {
    email: String!
    id: String!
    name: String!
  }

  type LogoutResponse {
    message: String!
  }

  type LoginResponse {
    id: String!
    name: String!
    email: String!
  }

  type Query {
    getCollection(id: String!): Collection
    getCollections(paginationInput: PaginationInput): GetCollectionsResponse
    searchCollectionsByKeyValue(searchInput: SearchInput): SearchCollectionsResponse

    getImages(page: Int!): [Image]

    getDynamoMovies: [DynamoMovie]

    getGenre(id: String!): Genre
    getGenres(paginationInput: PaginationInput): GetGenresResponse
    searchGenresByKeyValue(searchInput: SearchInput): SearchGenresResponse

    getMovieTrailer(id: String!): MovieTrailer
    getMovieTrailers(paginationInput: PaginationInput): GetMovieTrailersReponse
    searchMovieTrailersByKeyValue(searchInput: SearchInput): SearchMovieTrailersResponse

    getPostgresMovie(id: String!): PostgresMovie
    getPostgresMovies(paginationInput: PaginationInput): GetPostgresMoviesResponse
    searchPostgresMoviesByKeyValue(searchInput: SearchInput): SearchPostgresMoviesResponse

    getProductionCompany(id: String!): ProductionCompany
    getProductionCompanies(paginationInput: PaginationInput): GetProductionCompaniesResponse
    searchProductionCompaniesByKeyValue(searchInput: SearchInput): SearchProductionCompaniesResponse

    getProductionCountry(id: String!): ProductionCountry
    getProductionCountries(paginationInput: PaginationInput): GetProductionCountriesResponse
    searchProductionCountriesByKeyValue(searchInput: SearchInput): SearchProductionCountriesResponse

    getSpokenLanguage(id: String!): SpokenLanguage
    getSpokenLanguages(paginationInput: PaginationInput): GetSpokenLanguageResponse
    searchSpokenLanguagesByKeyValue(searchInput: SearchInput): SearchSpokenLanguagesResponse
  }

  type Mutation {
    registerUser(user: RegisterUserInput!): RegisterUserResponse
    logout: LogoutResponse
    login(user: LoginInput): LoginResponse
  }
`;
