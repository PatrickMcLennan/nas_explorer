export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: any;
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: any;
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: any;
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: any;
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: any;
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: any;
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: any;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  ISO8601Duration: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any;
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any;
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: any;
  /** Floats that will have a value less than 0. */
  NegativeFloat: any;
  /** Integers that will have a value less than 0. */
  NegativeInt: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: any;
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: any;
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: any;
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** A currency string, such as $21.25 */
  USCurrency: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: any;
  /** Represents NULL values */
  Void: any;
};



export type Collection = {
  __typename?: 'Collection';
  id: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  updatedAt: Scalars['Timestamp'];
  name: Scalars['String'];
  tmdbId: Scalars['String'];
  overview: Scalars['String'];
  posterPath?: Maybe<Scalars['String']>;
  backdropPath?: Maybe<Scalars['String']>;
  parts: Array<Maybe<Scalars['String']>>;
};





export type DynamoMovie = {
  __typename?: 'DynamoMovie';
  title: Scalars['String'];
  tmdbId: Scalars['String'];
  id: Scalars['String'];
  mediaType: Scalars['String'];
};



export type Genre = {
  __typename?: 'Genre';
  id: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  updatedAt: Scalars['Timestamp'];
  tmdbId: Scalars['String'];
  name: Scalars['String'];
};

export type GetCollectionsResponse = {
  __typename?: 'GetCollectionsResponse';
  collections?: Maybe<Array<Maybe<Collection>>>;
  pagination?: Maybe<Pagination>;
};

export type GetGenresResponse = {
  __typename?: 'GetGenresResponse';
  genres?: Maybe<Array<Maybe<Genre>>>;
  pagination?: Maybe<Pagination>;
};

export type GetMovieTrailersReponse = {
  __typename?: 'GetMovieTrailersReponse';
  movieTrailers?: Maybe<Array<Maybe<MovieTrailer>>>;
  pagination?: Maybe<Pagination>;
};

export type GetPostgresMoviesResponse = {
  __typename?: 'GetPostgresMoviesResponse';
  postgresMovies?: Maybe<Array<Maybe<PostgresMovie>>>;
  pagination?: Maybe<Pagination>;
};

export type GetProductionCompaniesResponse = {
  __typename?: 'GetProductionCompaniesResponse';
  productionCompanies?: Maybe<Array<Maybe<ProductionCompany>>>;
  pagination?: Maybe<Pagination>;
};

export type GetProductionCountriesResponse = {
  __typename?: 'GetProductionCountriesResponse';
  productionCountries?: Maybe<Array<Maybe<ProductionCountry>>>;
  pagination?: Maybe<Pagination>;
};

export type GetSpokenLanguageResponse = {
  __typename?: 'GetSpokenLanguageResponse';
  spokenLanguages?: Maybe<Array<Maybe<SpokenLanguage>>>;
  pagination?: Maybe<Pagination>;
};










export type Image = {
  __typename?: 'Image';
  name: Scalars['String'];
};








export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String'];
};




export type MovieTrailer = {
  __typename?: 'MovieTrailer';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  iso_639_1?: Maybe<Scalars['Timestamp']>;
  iso_3166_1?: Maybe<Scalars['Timestamp']>;
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  official?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['Timestamp']>;
  tmdbId: Scalars['String'];
  movieId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  registerUser?: Maybe<RegisterUserResponse>;
  logout?: Maybe<LogoutResponse>;
  login?: Maybe<LoginResponse>;
};


export type MutationRegisterUserArgs = {
  user: RegisterUserInput;
};


export type MutationLoginArgs = {
  user?: Maybe<LoginInput>;
};









export type Pagination = {
  __typename?: 'Pagination';
  total: Scalars['Int'];
};

export type PaginationInput = {
  offset?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
};






export type PostgresMovie = {
  __typename?: 'PostgresMovie';
  adult: Scalars['Boolean'];
  backdropPath?: Maybe<Scalars['String']>;
  collection?: Maybe<Scalars['String']>;
  budget: Scalars['BigInt'];
  createdAt: Scalars['Timestamp'];
  updatedAt: Scalars['Timestamp'];
  fileName: Scalars['String'];
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  tmdbId: Scalars['String'];
  imdbId?: Maybe<Scalars['String']>;
  originalLanguage: Scalars['String'];
  originalTitle: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Float']>;
  posterPath?: Maybe<Scalars['String']>;
  productionCompanies?: Maybe<Array<Maybe<Scalars['String']>>>;
  productionCountries?: Maybe<Array<Maybe<Scalars['String']>>>;
  releaseDate: Scalars['String'];
  revenue: Scalars['BigInt'];
  runtime?: Maybe<Scalars['Int']>;
  spokenLanguages?: Maybe<Array<Maybe<Scalars['String']>>>;
  status: Scalars['String'];
  tagline?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  trailers?: Maybe<Array<Maybe<Scalars['String']>>>;
  video: Scalars['Boolean'];
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
};

export type ProductionCompany = {
  __typename?: 'ProductionCompany';
  id: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  updatedAt: Scalars['Timestamp'];
  name: Scalars['String'];
  tmdbId: Scalars['String'];
  logoPath?: Maybe<Scalars['String']>;
  originCountry: Scalars['String'];
};

export type ProductionCountry = {
  __typename?: 'ProductionCountry';
  id: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  updatedAt: Scalars['Timestamp'];
  iso_3166_1: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCollection?: Maybe<Collection>;
  getCollections?: Maybe<GetCollectionsResponse>;
  searchCollectionsByKeyValue?: Maybe<SearchCollectionsResponse>;
  getImages?: Maybe<Array<Maybe<Image>>>;
  getDynamoMovies?: Maybe<Array<Maybe<DynamoMovie>>>;
  getGenre?: Maybe<Genre>;
  getGenres?: Maybe<GetGenresResponse>;
  searchGenresByKeyValue?: Maybe<SearchGenresResponse>;
  getMovieTrailer?: Maybe<MovieTrailer>;
  getMovieTrailers?: Maybe<GetMovieTrailersReponse>;
  searchMovieTrailersByKeyValue?: Maybe<SearchMovieTrailersResponse>;
  getPostgresMovie?: Maybe<PostgresMovie>;
  getPostgresMovies?: Maybe<GetPostgresMoviesResponse>;
  searchPostgresMoviesByKeyValue?: Maybe<SearchPostgresMoviesResponse>;
  getProductionCompany?: Maybe<ProductionCompany>;
  getProductionCompanies?: Maybe<GetProductionCompaniesResponse>;
  searchProductionCompaniesByKeyValue?: Maybe<SearchProductionCompaniesResponse>;
  getProductionCountry?: Maybe<ProductionCountry>;
  getProductionCountries?: Maybe<GetProductionCountriesResponse>;
  searchProductionCountriesByKeyValue?: Maybe<SearchProductionCountriesResponse>;
  getSpokenLanguage?: Maybe<SpokenLanguage>;
  getSpokenLanguages?: Maybe<GetSpokenLanguageResponse>;
  searchSpokenLanguagesByKeyValue?: Maybe<SearchSpokenLanguagesResponse>;
};


export type QueryGetCollectionArgs = {
  id: Scalars['String'];
};


export type QueryGetCollectionsArgs = {
  paginationInput?: Maybe<PaginationInput>;
};


export type QuerySearchCollectionsByKeyValueArgs = {
  searchInput?: Maybe<SearchInput>;
};


export type QueryGetImagesArgs = {
  page: Scalars['Int'];
};


export type QueryGetGenreArgs = {
  id: Scalars['String'];
};


export type QueryGetGenresArgs = {
  paginationInput?: Maybe<PaginationInput>;
};


export type QuerySearchGenresByKeyValueArgs = {
  searchInput?: Maybe<SearchInput>;
};


export type QueryGetMovieTrailerArgs = {
  id: Scalars['String'];
};


export type QueryGetMovieTrailersArgs = {
  paginationInput?: Maybe<PaginationInput>;
};


export type QuerySearchMovieTrailersByKeyValueArgs = {
  searchInput?: Maybe<SearchInput>;
};


export type QueryGetPostgresMovieArgs = {
  id: Scalars['String'];
};


export type QueryGetPostgresMoviesArgs = {
  paginationInput?: Maybe<PaginationInput>;
};


export type QuerySearchPostgresMoviesByKeyValueArgs = {
  searchInput?: Maybe<SearchInput>;
};


export type QueryGetProductionCompanyArgs = {
  id: Scalars['String'];
};


export type QueryGetProductionCompaniesArgs = {
  paginationInput?: Maybe<PaginationInput>;
};


export type QuerySearchProductionCompaniesByKeyValueArgs = {
  searchInput?: Maybe<SearchInput>;
};


export type QueryGetProductionCountryArgs = {
  id: Scalars['String'];
};


export type QueryGetProductionCountriesArgs = {
  paginationInput?: Maybe<PaginationInput>;
};


export type QuerySearchProductionCountriesByKeyValueArgs = {
  searchInput?: Maybe<SearchInput>;
};


export type QueryGetSpokenLanguageArgs = {
  id: Scalars['String'];
};


export type QueryGetSpokenLanguagesArgs = {
  paginationInput?: Maybe<PaginationInput>;
};


export type QuerySearchSpokenLanguagesByKeyValueArgs = {
  searchInput?: Maybe<SearchInput>;
};



export type RegisterUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};

export type RegisterUserResponse = {
  __typename?: 'RegisterUserResponse';
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};


export type SearchCollectionsResponse = {
  __typename?: 'SearchCollectionsResponse';
  collections?: Maybe<Array<Maybe<Collection>>>;
  pagination?: Maybe<Pagination>;
};

export type SearchGenresResponse = {
  __typename?: 'SearchGenresResponse';
  genres?: Maybe<Array<Maybe<Genre>>>;
  pagination?: Maybe<Pagination>;
};

export type SearchInput = {
  searchKey?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  paginationInput?: Maybe<PaginationInput>;
};

export type SearchMovieTrailersResponse = {
  __typename?: 'SearchMovieTrailersResponse';
  movieTrailers?: Maybe<Array<Maybe<MovieTrailer>>>;
  pagination?: Maybe<Pagination>;
};

export type SearchPostgresMoviesResponse = {
  __typename?: 'SearchPostgresMoviesResponse';
  postgresMovies?: Maybe<Array<Maybe<PostgresMovie>>>;
  pagination?: Maybe<Pagination>;
};

export type SearchProductionCompaniesResponse = {
  __typename?: 'SearchProductionCompaniesResponse';
  productionCompanies?: Maybe<Array<Maybe<ProductionCompany>>>;
  pagination?: Maybe<Pagination>;
};

export type SearchProductionCountriesResponse = {
  __typename?: 'SearchProductionCountriesResponse';
  productionCountries?: Maybe<Array<Maybe<ProductionCountry>>>;
  pagination?: Maybe<Pagination>;
};

export type SearchSpokenLanguagesResponse = {
  __typename?: 'SearchSpokenLanguagesResponse';
  spokenLanguages?: Maybe<Array<Maybe<SpokenLanguage>>>;
  pagination?: Maybe<Pagination>;
};

export type SpokenLanguage = {
  __typename?: 'SpokenLanguage';
  id: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  updatedAt: Scalars['Timestamp'];
  iso_639_1: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  englishName?: Maybe<Scalars['String']>;
};








export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  hash: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  updatedAt: Scalars['Timestamp'];
  id: Scalars['String'];
  name: Scalars['String'];
};



export type RegisterUserMutationVariables = Exact<{
  user: RegisterUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: Maybe<{ __typename?: 'RegisterUserResponse', id: string, email: string, name: string }> };

export type LoginMutationVariables = Exact<{
  user: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: Maybe<{ __typename?: 'LoginResponse', id: string, email: string, name: string }> };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: Maybe<{ __typename?: 'LogoutResponse', message: string }> };

export type GetCollectionsQueryVariables = Exact<{
  paginationInput?: Maybe<PaginationInput>;
}>;


export type GetCollectionsQuery = { __typename?: 'Query', getCollections?: Maybe<{ __typename?: 'GetCollectionsResponse', collections?: Maybe<Array<Maybe<{ __typename?: 'Collection', id: string, createdAt: any, updatedAt: any, name: string, tmdbId: string, overview: string, posterPath?: Maybe<string>, backdropPath?: Maybe<string>, parts: Array<Maybe<string>> }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetCollectionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCollectionQuery = { __typename?: 'Query', getCollection?: Maybe<{ __typename?: 'Collection', id: string, createdAt: any, updatedAt: any, name: string, tmdbId: string, overview: string, posterPath?: Maybe<string>, backdropPath?: Maybe<string>, parts: Array<Maybe<string>> }> };

export type SearchCollectionsByKeyValueQueryVariables = Exact<{
  searchInput?: Maybe<SearchInput>;
}>;


export type SearchCollectionsByKeyValueQuery = { __typename?: 'Query', searchCollectionsByKeyValue?: Maybe<{ __typename?: 'SearchCollectionsResponse', collections?: Maybe<Array<Maybe<{ __typename?: 'Collection', id: string, createdAt: any, updatedAt: any, name: string, tmdbId: string, overview: string, posterPath?: Maybe<string>, backdropPath?: Maybe<string>, parts: Array<Maybe<string>> }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetGenresQueryVariables = Exact<{
  paginationInput?: Maybe<PaginationInput>;
}>;


export type GetGenresQuery = { __typename?: 'Query', getGenres?: Maybe<{ __typename?: 'GetGenresResponse', genres?: Maybe<Array<Maybe<{ __typename?: 'Genre', id: string, createdAt: any, updatedAt: any, tmdbId: string, name: string }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetGenreQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetGenreQuery = { __typename?: 'Query', getGenre?: Maybe<{ __typename?: 'Genre', id: string, createdAt: any, updatedAt: any, tmdbId: string, name: string }> };

export type SearchGenresByKeyValueQueryVariables = Exact<{
  searchInput?: Maybe<SearchInput>;
}>;


export type SearchGenresByKeyValueQuery = { __typename?: 'Query', searchGenresByKeyValue?: Maybe<{ __typename?: 'SearchGenresResponse', genres?: Maybe<Array<Maybe<{ __typename?: 'Genre', id: string, createdAt: any, updatedAt: any, tmdbId: string, name: string }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetImagesQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetImagesQuery = { __typename?: 'Query', getImages?: Maybe<Array<Maybe<{ __typename?: 'Image', name: string }>>> };

export type GetMovieTrailersQueryVariables = Exact<{
  paginationInput?: Maybe<PaginationInput>;
}>;


export type GetMovieTrailersQuery = { __typename?: 'Query', getMovieTrailers?: Maybe<{ __typename?: 'GetMovieTrailersReponse', movieTrailers?: Maybe<Array<Maybe<{ __typename?: 'MovieTrailer', id: string, createdAt: string, updatedAt: string, iso_639_1?: Maybe<any>, iso_3166_1?: Maybe<any>, name?: Maybe<string>, key?: Maybe<string>, site?: Maybe<string>, size?: Maybe<number>, type?: Maybe<string>, official?: Maybe<boolean>, publishedAt?: Maybe<any>, tmdbId: string, movieId: string }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetMovieTrailerQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMovieTrailerQuery = { __typename?: 'Query', getMovieTrailer?: Maybe<{ __typename?: 'MovieTrailer', id: string, createdAt: string, updatedAt: string, iso_639_1?: Maybe<any>, iso_3166_1?: Maybe<any>, name?: Maybe<string>, key?: Maybe<string>, site?: Maybe<string>, size?: Maybe<number>, type?: Maybe<string>, official?: Maybe<boolean>, publishedAt?: Maybe<any>, tmdbId: string, movieId: string }> };

export type SearchMovieTrailersByKeyValueQueryVariables = Exact<{
  searchInput?: Maybe<SearchInput>;
}>;


export type SearchMovieTrailersByKeyValueQuery = { __typename?: 'Query', searchMovieTrailersByKeyValue?: Maybe<{ __typename?: 'SearchMovieTrailersResponse', movieTrailers?: Maybe<Array<Maybe<{ __typename?: 'MovieTrailer', id: string, createdAt: string, updatedAt: string, iso_639_1?: Maybe<any>, iso_3166_1?: Maybe<any>, name?: Maybe<string>, key?: Maybe<string>, site?: Maybe<string>, size?: Maybe<number>, type?: Maybe<string>, official?: Maybe<boolean>, publishedAt?: Maybe<any>, tmdbId: string, movieId: string }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetDynamoMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDynamoMoviesQuery = { __typename?: 'Query', getDynamoMovies?: Maybe<Array<Maybe<{ __typename?: 'DynamoMovie', title: string, tmdbId: string, id: string, mediaType: string }>>> };

export type GetPostgresMovieQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostgresMovieQuery = { __typename?: 'Query', getPostgresMovie?: Maybe<{ __typename?: 'PostgresMovie', adult: boolean, backdropPath?: Maybe<string>, collection?: Maybe<string>, budget: any, createdAt: any, updatedAt: any, fileName: string, genres?: Maybe<Array<Maybe<string>>>, homepage?: Maybe<string>, id: string, tmdbId: string, imdbId?: Maybe<string>, originalLanguage: string, originalTitle: string, overview?: Maybe<string>, popularity?: Maybe<number>, posterPath?: Maybe<string>, productionCompanies?: Maybe<Array<Maybe<string>>>, productionCountries?: Maybe<Array<Maybe<string>>>, releaseDate: string, revenue: any, runtime?: Maybe<number>, spokenLanguages?: Maybe<Array<Maybe<string>>>, status: string, tagline?: Maybe<string>, title: string, trailers?: Maybe<Array<Maybe<string>>>, video: boolean, voteAverage: number, voteCount: number }> };

export type GetPostgresMoviesQueryVariables = Exact<{
  paginationInput?: Maybe<PaginationInput>;
}>;


export type GetPostgresMoviesQuery = { __typename?: 'Query', getPostgresMovies?: Maybe<{ __typename?: 'GetPostgresMoviesResponse', postgresMovies?: Maybe<Array<Maybe<{ __typename?: 'PostgresMovie', adult: boolean, backdropPath?: Maybe<string>, collection?: Maybe<string>, budget: any, createdAt: any, updatedAt: any, fileName: string, genres?: Maybe<Array<Maybe<string>>>, homepage?: Maybe<string>, id: string, tmdbId: string, imdbId?: Maybe<string>, originalLanguage: string, originalTitle: string, overview?: Maybe<string>, popularity?: Maybe<number>, posterPath?: Maybe<string>, productionCompanies?: Maybe<Array<Maybe<string>>>, productionCountries?: Maybe<Array<Maybe<string>>>, releaseDate: string, revenue: any, runtime?: Maybe<number>, spokenLanguages?: Maybe<Array<Maybe<string>>>, status: string, tagline?: Maybe<string>, title: string, trailers?: Maybe<Array<Maybe<string>>>, video: boolean, voteAverage: number, voteCount: number }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type SearchPostgresMoviesByKeyValueQueryVariables = Exact<{
  searchInput?: Maybe<SearchInput>;
}>;


export type SearchPostgresMoviesByKeyValueQuery = { __typename?: 'Query', searchPostgresMoviesByKeyValue?: Maybe<{ __typename?: 'SearchPostgresMoviesResponse', postgresMovies?: Maybe<Array<Maybe<{ __typename?: 'PostgresMovie', adult: boolean, backdropPath?: Maybe<string>, collection?: Maybe<string>, budget: any, createdAt: any, updatedAt: any, fileName: string, genres?: Maybe<Array<Maybe<string>>>, homepage?: Maybe<string>, id: string, tmdbId: string, imdbId?: Maybe<string>, originalLanguage: string, originalTitle: string, overview?: Maybe<string>, popularity?: Maybe<number>, posterPath?: Maybe<string>, productionCompanies?: Maybe<Array<Maybe<string>>>, productionCountries?: Maybe<Array<Maybe<string>>>, releaseDate: string, revenue: any, runtime?: Maybe<number>, spokenLanguages?: Maybe<Array<Maybe<string>>>, status: string, tagline?: Maybe<string>, title: string, trailers?: Maybe<Array<Maybe<string>>>, video: boolean, voteAverage: number, voteCount: number }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetProductionCompaniesQueryVariables = Exact<{
  paginationInput?: Maybe<PaginationInput>;
}>;


export type GetProductionCompaniesQuery = { __typename?: 'Query', getProductionCompanies?: Maybe<{ __typename?: 'GetProductionCompaniesResponse', productionCompanies?: Maybe<Array<Maybe<{ __typename?: 'ProductionCompany', id: string, name: string, createdAt: any, updatedAt: any, tmdbId: string, logoPath?: Maybe<string>, originCountry: string }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetProductionCompanyQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProductionCompanyQuery = { __typename?: 'Query', getProductionCompany?: Maybe<{ __typename?: 'ProductionCompany', id: string, name: string, createdAt: any, updatedAt: any, tmdbId: string, logoPath?: Maybe<string>, originCountry: string }> };

export type SearchProductionCompaniesByKeyValueQueryVariables = Exact<{
  searchInput?: Maybe<SearchInput>;
}>;


export type SearchProductionCompaniesByKeyValueQuery = { __typename?: 'Query', searchProductionCompaniesByKeyValue?: Maybe<{ __typename?: 'SearchProductionCompaniesResponse', productionCompanies?: Maybe<Array<Maybe<{ __typename?: 'ProductionCompany', id: string, name: string, createdAt: any, updatedAt: any, tmdbId: string, logoPath?: Maybe<string>, originCountry: string }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetProductionCountriesQueryVariables = Exact<{
  paginationInput?: Maybe<PaginationInput>;
}>;


export type GetProductionCountriesQuery = { __typename?: 'Query', getProductionCountries?: Maybe<{ __typename?: 'GetProductionCountriesResponse', productionCountries?: Maybe<Array<Maybe<{ __typename?: 'ProductionCountry', id: string, createdAt: any, updatedAt: any, iso_3166_1: string, name: string }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetProductionCountryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProductionCountryQuery = { __typename?: 'Query', getProductionCountry?: Maybe<{ __typename?: 'ProductionCountry', id: string, createdAt: any, updatedAt: any, iso_3166_1: string, name: string }> };

export type SearchProductionCountriesByKeyValueQueryVariables = Exact<{
  searchInput?: Maybe<SearchInput>;
}>;


export type SearchProductionCountriesByKeyValueQuery = { __typename?: 'Query', searchProductionCountriesByKeyValue?: Maybe<{ __typename?: 'SearchProductionCountriesResponse', productionCountries?: Maybe<Array<Maybe<{ __typename?: 'ProductionCountry', id: string, createdAt: any, updatedAt: any, iso_3166_1: string, name: string }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetSpokenLanguagesQueryVariables = Exact<{
  paginationInput?: Maybe<PaginationInput>;
}>;


export type GetSpokenLanguagesQuery = { __typename?: 'Query', getSpokenLanguages?: Maybe<{ __typename?: 'GetSpokenLanguageResponse', spokenLanguages?: Maybe<Array<Maybe<{ __typename?: 'SpokenLanguage', id: string, createdAt: any, updatedAt: any, iso_639_1: string, name?: Maybe<string>, englishName?: Maybe<string> }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };

export type GetSpokenLanguageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetSpokenLanguageQuery = { __typename?: 'Query', getSpokenLanguage?: Maybe<{ __typename?: 'SpokenLanguage', id: string, createdAt: any, updatedAt: any, iso_639_1: string, name?: Maybe<string>, englishName?: Maybe<string> }> };

export type SearchSpokenLanguagesByKeyValueQueryVariables = Exact<{
  searchInput?: Maybe<SearchInput>;
}>;


export type SearchSpokenLanguagesByKeyValueQuery = { __typename?: 'Query', searchSpokenLanguagesByKeyValue?: Maybe<{ __typename?: 'SearchSpokenLanguagesResponse', spokenLanguages?: Maybe<Array<Maybe<{ __typename?: 'SpokenLanguage', id: string, createdAt: any, updatedAt: any, iso_639_1: string, name?: Maybe<string>, englishName?: Maybe<string> }>>>, pagination?: Maybe<{ __typename?: 'Pagination', total: number }> }> };
