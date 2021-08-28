import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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










export type Image = {
  __typename?: 'Image';
  name: Scalars['String'];
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
  getCollections?: Maybe<Array<Maybe<Collection>>>;
  getImages?: Maybe<Array<Maybe<Image>>>;
  getDynamoMovies?: Maybe<Array<Maybe<DynamoMovie>>>;
  getGenres?: Maybe<Array<Maybe<Genre>>>;
  getGenre?: Maybe<Genre>;
  getMovieTrailer?: Maybe<MovieTrailer>;
  getMovieTrailers?: Maybe<Array<Maybe<MovieTrailer>>>;
  getPostgresMovies?: Maybe<Array<Maybe<PostgresMovie>>>;
  getPostgresMovie: PostgresMovie;
  getProductionCompany?: Maybe<ProductionCompany>;
  getProductionCompanies?: Maybe<Array<Maybe<ProductionCompany>>>;
  getProductionCountries?: Maybe<Array<Maybe<ProductionCountry>>>;
  getProductionCountry?: Maybe<ProductionCountry>;
  getSpokenLanguages?: Maybe<Array<Maybe<SpokenLanguage>>>;
  getSpokenLanguage?: Maybe<SpokenLanguage>;
};


export type QueryGetCollectionArgs = {
  id: Scalars['String'];
};


export type QueryGetImagesArgs = {
  page: Scalars['Int'];
};


export type QueryGetGenreArgs = {
  id: Scalars['String'];
};


export type QueryGetMovieTrailerArgs = {
  id: Scalars['String'];
};


export type QueryGetPostgresMovieArgs = {
  id: Scalars['String'];
};


export type QueryGetProductionCompanyArgs = {
  id: Scalars['String'];
};


export type QueryGetProductionCountryArgs = {
  id: Scalars['String'];
};


export type QueryGetSpokenLanguageArgs = {
  id: Scalars['String'];
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










export type GetCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionsQuery = { __typename?: 'Query', getCollections?: Maybe<Array<Maybe<{ __typename?: 'Collection', id: string, createdAt: any, updatedAt: any, name: string, tmdbId: string, overview: string, posterPath?: Maybe<string>, backdropPath?: Maybe<string>, parts: Array<Maybe<string>> }>>> };

export type GetCollectionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCollectionQuery = { __typename?: 'Query', getCollection?: Maybe<{ __typename?: 'Collection', id: string, createdAt: any, updatedAt: any, name: string, tmdbId: string, overview: string, posterPath?: Maybe<string>, backdropPath?: Maybe<string>, parts: Array<Maybe<string>> }> };

export type GetGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresQuery = { __typename?: 'Query', getGenres?: Maybe<Array<Maybe<{ __typename?: 'Genre', id: string, createdAt: any, updatedAt: any, tmdbId: string, name: string }>>> };

export type GetGenreQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetGenreQuery = { __typename?: 'Query', getGenre?: Maybe<{ __typename?: 'Genre', id: string, createdAt: any, updatedAt: any, tmdbId: string, name: string }> };

export type GetImagesQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetImagesQuery = { __typename?: 'Query', getImages?: Maybe<Array<Maybe<{ __typename?: 'Image', name: string }>>> };

export type GetMovieTrailersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMovieTrailersQuery = { __typename?: 'Query', getMovieTrailers?: Maybe<Array<Maybe<{ __typename?: 'MovieTrailer', id: string, createdAt: string, updatedAt: string, iso_639_1?: Maybe<any>, iso_3166_1?: Maybe<any>, name?: Maybe<string>, key?: Maybe<string>, site?: Maybe<string>, size?: Maybe<number>, type?: Maybe<string>, official?: Maybe<boolean>, publishedAt?: Maybe<any>, tmdbId: string }>>> };

export type GetMovieTrailerQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMovieTrailerQuery = { __typename?: 'Query', getMovieTrailer?: Maybe<{ __typename?: 'MovieTrailer', id: string, createdAt: string, updatedAt: string, iso_639_1?: Maybe<any>, iso_3166_1?: Maybe<any>, name?: Maybe<string>, key?: Maybe<string>, site?: Maybe<string>, size?: Maybe<number>, type?: Maybe<string>, official?: Maybe<boolean>, publishedAt?: Maybe<any>, tmdbId: string }> };

export type GetDynamoMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDynamoMoviesQuery = { __typename?: 'Query', getDynamoMovies?: Maybe<Array<Maybe<{ __typename?: 'DynamoMovie', title: string, tmdbId: string, id: string, mediaType: string }>>> };

export type GetPostgresMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostgresMoviesQuery = { __typename?: 'Query', getPostgresMovies?: Maybe<Array<Maybe<{ __typename?: 'PostgresMovie', adult: boolean, backdropPath?: Maybe<string>, collection?: Maybe<string>, budget: any, createdAt: any, updatedAt: any, fileName: string, genres?: Maybe<Array<Maybe<string>>>, homepage?: Maybe<string>, id: string, tmdbId: string, imdbId?: Maybe<string>, originalLanguage: string, originalTitle: string, overview?: Maybe<string>, popularity?: Maybe<number>, posterPath?: Maybe<string>, productionCompanies?: Maybe<Array<Maybe<string>>>, productionCountries?: Maybe<Array<Maybe<string>>>, releaseDate: string, revenue: any, runtime?: Maybe<number>, spokenLanguages?: Maybe<Array<Maybe<string>>>, status: string, tagline?: Maybe<string>, title: string, trailers?: Maybe<Array<Maybe<string>>>, video: boolean, voteAverage: number, voteCount: number }>>> };

export type GetPostgresMovieQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostgresMovieQuery = { __typename?: 'Query', getPostgresMovie: { __typename?: 'PostgresMovie', adult: boolean, backdropPath?: Maybe<string>, collection?: Maybe<string>, budget: any, createdAt: any, updatedAt: any, fileName: string, genres?: Maybe<Array<Maybe<string>>>, homepage?: Maybe<string>, id: string, tmdbId: string, imdbId?: Maybe<string>, originalLanguage: string, originalTitle: string, overview?: Maybe<string>, popularity?: Maybe<number>, posterPath?: Maybe<string>, productionCompanies?: Maybe<Array<Maybe<string>>>, productionCountries?: Maybe<Array<Maybe<string>>>, releaseDate: string, revenue: any, runtime?: Maybe<number>, spokenLanguages?: Maybe<Array<Maybe<string>>>, status: string, tagline?: Maybe<string>, title: string, trailers?: Maybe<Array<Maybe<string>>>, video: boolean, voteAverage: number, voteCount: number } };

export type GetProductionCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductionCompaniesQuery = { __typename?: 'Query', getProductionCompanies?: Maybe<Array<Maybe<{ __typename?: 'ProductionCompany', id: string, name: string, createdAt: any, updatedAt: any, tmdbId: string, logoPath?: Maybe<string>, originCountry: string }>>> };

export type GetProductionCompanyQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProductionCompanyQuery = { __typename?: 'Query', getProductionCompany?: Maybe<{ __typename?: 'ProductionCompany', id: string, name: string, createdAt: any, updatedAt: any, tmdbId: string, logoPath?: Maybe<string>, originCountry: string }> };

export type GetProductionCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductionCountriesQuery = { __typename?: 'Query', getProductionCountries?: Maybe<Array<Maybe<{ __typename?: 'ProductionCountry', id: string, createdAt: any, updatedAt: any, iso_3166_1: string, name: string }>>> };

export type GetProductionCountryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProductionCountryQuery = { __typename?: 'Query', getProductionCountry?: Maybe<{ __typename?: 'ProductionCountry', id: string, createdAt: any, updatedAt: any, iso_3166_1: string, name: string }> };

export type GetSpokenLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpokenLanguagesQuery = { __typename?: 'Query', getSpokenLanguages?: Maybe<Array<Maybe<{ __typename?: 'SpokenLanguage', id: string, createdAt: any, updatedAt: any, iso_639_1: string, name?: Maybe<string>, englishName?: Maybe<string> }>>> };

export type GetSpokenLanguageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetSpokenLanguageQuery = { __typename?: 'Query', getSpokenLanguage?: Maybe<{ __typename?: 'SpokenLanguage', id: string, createdAt: any, updatedAt: any, iso_639_1: string, name?: Maybe<string>, englishName?: Maybe<string> }> };


export const GetCollectionsDocument = gql`
    query getCollections {
  getCollections {
    ... on Collection {
      id
      createdAt
      updatedAt
      name
      tmdbId
      overview
      posterPath
      backdropPath
      parts
    }
  }
}
    `;

/**
 * __useGetCollectionsQuery__
 *
 * To run a query within a React component, call `useGetCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<GetCollectionsQuery, GetCollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCollectionsQuery, GetCollectionsQueryVariables>(GetCollectionsDocument, options);
      }
export function useGetCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionsQuery, GetCollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCollectionsQuery, GetCollectionsQueryVariables>(GetCollectionsDocument, options);
        }
export type GetCollectionsQueryHookResult = ReturnType<typeof useGetCollectionsQuery>;
export type GetCollectionsLazyQueryHookResult = ReturnType<typeof useGetCollectionsLazyQuery>;
export type GetCollectionsQueryResult = Apollo.QueryResult<GetCollectionsQuery, GetCollectionsQueryVariables>;
export const GetCollectionDocument = gql`
    query getCollection($id: String!) {
  getCollection(id: $id) {
    id
    createdAt
    updatedAt
    name
    tmdbId
    overview
    posterPath
    backdropPath
    parts
  }
}
    `;

/**
 * __useGetCollectionQuery__
 *
 * To run a query within a React component, call `useGetCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCollectionQuery(baseOptions: Apollo.QueryHookOptions<GetCollectionQuery, GetCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCollectionQuery, GetCollectionQueryVariables>(GetCollectionDocument, options);
      }
export function useGetCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionQuery, GetCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCollectionQuery, GetCollectionQueryVariables>(GetCollectionDocument, options);
        }
export type GetCollectionQueryHookResult = ReturnType<typeof useGetCollectionQuery>;
export type GetCollectionLazyQueryHookResult = ReturnType<typeof useGetCollectionLazyQuery>;
export type GetCollectionQueryResult = Apollo.QueryResult<GetCollectionQuery, GetCollectionQueryVariables>;
export const GetGenresDocument = gql`
    query getGenres {
  getGenres {
    ... on Genre {
      id
      createdAt
      updatedAt
      tmdbId
      name
    }
  }
}
    `;

/**
 * __useGetGenresQuery__
 *
 * To run a query within a React component, call `useGetGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenresQuery(baseOptions?: Apollo.QueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options);
      }
export function useGetGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options);
        }
export type GetGenresQueryHookResult = ReturnType<typeof useGetGenresQuery>;
export type GetGenresLazyQueryHookResult = ReturnType<typeof useGetGenresLazyQuery>;
export type GetGenresQueryResult = Apollo.QueryResult<GetGenresQuery, GetGenresQueryVariables>;
export const GetGenreDocument = gql`
    query getGenre($id: String!) {
  getGenre(id: $id) {
    id
    createdAt
    updatedAt
    tmdbId
    name
  }
}
    `;

/**
 * __useGetGenreQuery__
 *
 * To run a query within a React component, call `useGetGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGenreQuery(baseOptions: Apollo.QueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, options);
      }
export function useGetGenreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, options);
        }
export type GetGenreQueryHookResult = ReturnType<typeof useGetGenreQuery>;
export type GetGenreLazyQueryHookResult = ReturnType<typeof useGetGenreLazyQuery>;
export type GetGenreQueryResult = Apollo.QueryResult<GetGenreQuery, GetGenreQueryVariables>;
export const GetImagesDocument = gql`
    query getImages($page: Int!) {
  getImages(page: $page) {
    name
  }
}
    `;

/**
 * __useGetImagesQuery__
 *
 * To run a query within a React component, call `useGetImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImagesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetImagesQuery(baseOptions: Apollo.QueryHookOptions<GetImagesQuery, GetImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetImagesQuery, GetImagesQueryVariables>(GetImagesDocument, options);
      }
export function useGetImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImagesQuery, GetImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetImagesQuery, GetImagesQueryVariables>(GetImagesDocument, options);
        }
export type GetImagesQueryHookResult = ReturnType<typeof useGetImagesQuery>;
export type GetImagesLazyQueryHookResult = ReturnType<typeof useGetImagesLazyQuery>;
export type GetImagesQueryResult = Apollo.QueryResult<GetImagesQuery, GetImagesQueryVariables>;
export const GetMovieTrailersDocument = gql`
    query getMovieTrailers {
  getMovieTrailers {
    ... on MovieTrailer {
      id
      createdAt
      updatedAt
      iso_639_1
      iso_3166_1
      name
      key
      site
      size
      type
      official
      publishedAt
      tmdbId
    }
  }
}
    `;

/**
 * __useGetMovieTrailersQuery__
 *
 * To run a query within a React component, call `useGetMovieTrailersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieTrailersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieTrailersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMovieTrailersQuery(baseOptions?: Apollo.QueryHookOptions<GetMovieTrailersQuery, GetMovieTrailersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieTrailersQuery, GetMovieTrailersQueryVariables>(GetMovieTrailersDocument, options);
      }
export function useGetMovieTrailersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieTrailersQuery, GetMovieTrailersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieTrailersQuery, GetMovieTrailersQueryVariables>(GetMovieTrailersDocument, options);
        }
export type GetMovieTrailersQueryHookResult = ReturnType<typeof useGetMovieTrailersQuery>;
export type GetMovieTrailersLazyQueryHookResult = ReturnType<typeof useGetMovieTrailersLazyQuery>;
export type GetMovieTrailersQueryResult = Apollo.QueryResult<GetMovieTrailersQuery, GetMovieTrailersQueryVariables>;
export const GetMovieTrailerDocument = gql`
    query getMovieTrailer($id: String!) {
  getMovieTrailer(id: $id) {
    id
    createdAt
    updatedAt
    iso_639_1
    iso_3166_1
    name
    key
    site
    size
    type
    official
    publishedAt
    tmdbId
  }
}
    `;

/**
 * __useGetMovieTrailerQuery__
 *
 * To run a query within a React component, call `useGetMovieTrailerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieTrailerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieTrailerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieTrailerQuery(baseOptions: Apollo.QueryHookOptions<GetMovieTrailerQuery, GetMovieTrailerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieTrailerQuery, GetMovieTrailerQueryVariables>(GetMovieTrailerDocument, options);
      }
export function useGetMovieTrailerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieTrailerQuery, GetMovieTrailerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieTrailerQuery, GetMovieTrailerQueryVariables>(GetMovieTrailerDocument, options);
        }
export type GetMovieTrailerQueryHookResult = ReturnType<typeof useGetMovieTrailerQuery>;
export type GetMovieTrailerLazyQueryHookResult = ReturnType<typeof useGetMovieTrailerLazyQuery>;
export type GetMovieTrailerQueryResult = Apollo.QueryResult<GetMovieTrailerQuery, GetMovieTrailerQueryVariables>;
export const GetDynamoMoviesDocument = gql`
    query getDynamoMovies {
  getDynamoMovies {
    title
    tmdbId
    id
    mediaType
  }
}
    `;

/**
 * __useGetDynamoMoviesQuery__
 *
 * To run a query within a React component, call `useGetDynamoMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDynamoMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDynamoMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDynamoMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetDynamoMoviesQuery, GetDynamoMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDynamoMoviesQuery, GetDynamoMoviesQueryVariables>(GetDynamoMoviesDocument, options);
      }
export function useGetDynamoMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDynamoMoviesQuery, GetDynamoMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDynamoMoviesQuery, GetDynamoMoviesQueryVariables>(GetDynamoMoviesDocument, options);
        }
export type GetDynamoMoviesQueryHookResult = ReturnType<typeof useGetDynamoMoviesQuery>;
export type GetDynamoMoviesLazyQueryHookResult = ReturnType<typeof useGetDynamoMoviesLazyQuery>;
export type GetDynamoMoviesQueryResult = Apollo.QueryResult<GetDynamoMoviesQuery, GetDynamoMoviesQueryVariables>;
export const GetPostgresMoviesDocument = gql`
    query getPostgresMovies {
  getPostgresMovies {
    adult
    backdropPath
    collection
    budget
    createdAt
    updatedAt
    fileName
    genres
    homepage
    id
    tmdbId
    imdbId
    originalLanguage
    originalTitle
    overview
    popularity
    posterPath
    productionCompanies
    productionCountries
    releaseDate
    revenue
    runtime
    spokenLanguages
    status
    tagline
    title
    trailers
    video
    voteAverage
    voteCount
  }
}
    `;

/**
 * __useGetPostgresMoviesQuery__
 *
 * To run a query within a React component, call `useGetPostgresMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostgresMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostgresMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostgresMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetPostgresMoviesQuery, GetPostgresMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostgresMoviesQuery, GetPostgresMoviesQueryVariables>(GetPostgresMoviesDocument, options);
      }
export function useGetPostgresMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostgresMoviesQuery, GetPostgresMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostgresMoviesQuery, GetPostgresMoviesQueryVariables>(GetPostgresMoviesDocument, options);
        }
export type GetPostgresMoviesQueryHookResult = ReturnType<typeof useGetPostgresMoviesQuery>;
export type GetPostgresMoviesLazyQueryHookResult = ReturnType<typeof useGetPostgresMoviesLazyQuery>;
export type GetPostgresMoviesQueryResult = Apollo.QueryResult<GetPostgresMoviesQuery, GetPostgresMoviesQueryVariables>;
export const GetPostgresMovieDocument = gql`
    query getPostgresMovie($id: String!) {
  getPostgresMovie(id: $id) {
    adult
    backdropPath
    collection
    budget
    createdAt
    updatedAt
    fileName
    genres
    homepage
    id
    tmdbId
    imdbId
    originalLanguage
    originalTitle
    overview
    popularity
    posterPath
    productionCompanies
    productionCountries
    releaseDate
    revenue
    runtime
    spokenLanguages
    status
    tagline
    title
    trailers
    video
    voteAverage
    voteCount
  }
}
    `;

/**
 * __useGetPostgresMovieQuery__
 *
 * To run a query within a React component, call `useGetPostgresMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostgresMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostgresMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostgresMovieQuery(baseOptions: Apollo.QueryHookOptions<GetPostgresMovieQuery, GetPostgresMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostgresMovieQuery, GetPostgresMovieQueryVariables>(GetPostgresMovieDocument, options);
      }
export function useGetPostgresMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostgresMovieQuery, GetPostgresMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostgresMovieQuery, GetPostgresMovieQueryVariables>(GetPostgresMovieDocument, options);
        }
export type GetPostgresMovieQueryHookResult = ReturnType<typeof useGetPostgresMovieQuery>;
export type GetPostgresMovieLazyQueryHookResult = ReturnType<typeof useGetPostgresMovieLazyQuery>;
export type GetPostgresMovieQueryResult = Apollo.QueryResult<GetPostgresMovieQuery, GetPostgresMovieQueryVariables>;
export const GetProductionCompaniesDocument = gql`
    query getProductionCompanies {
  getProductionCompanies {
    ... on ProductionCompany {
      id
      name
      createdAt
      updatedAt
      tmdbId
      logoPath
      originCountry
    }
  }
}
    `;

/**
 * __useGetProductionCompaniesQuery__
 *
 * To run a query within a React component, call `useGetProductionCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductionCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductionCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductionCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetProductionCompaniesQuery, GetProductionCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductionCompaniesQuery, GetProductionCompaniesQueryVariables>(GetProductionCompaniesDocument, options);
      }
export function useGetProductionCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductionCompaniesQuery, GetProductionCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductionCompaniesQuery, GetProductionCompaniesQueryVariables>(GetProductionCompaniesDocument, options);
        }
export type GetProductionCompaniesQueryHookResult = ReturnType<typeof useGetProductionCompaniesQuery>;
export type GetProductionCompaniesLazyQueryHookResult = ReturnType<typeof useGetProductionCompaniesLazyQuery>;
export type GetProductionCompaniesQueryResult = Apollo.QueryResult<GetProductionCompaniesQuery, GetProductionCompaniesQueryVariables>;
export const GetProductionCompanyDocument = gql`
    query getProductionCompany($id: String!) {
  getProductionCompany(id: $id) {
    id
    name
    createdAt
    updatedAt
    tmdbId
    logoPath
    originCountry
  }
}
    `;

/**
 * __useGetProductionCompanyQuery__
 *
 * To run a query within a React component, call `useGetProductionCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductionCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductionCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductionCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetProductionCompanyQuery, GetProductionCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductionCompanyQuery, GetProductionCompanyQueryVariables>(GetProductionCompanyDocument, options);
      }
export function useGetProductionCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductionCompanyQuery, GetProductionCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductionCompanyQuery, GetProductionCompanyQueryVariables>(GetProductionCompanyDocument, options);
        }
export type GetProductionCompanyQueryHookResult = ReturnType<typeof useGetProductionCompanyQuery>;
export type GetProductionCompanyLazyQueryHookResult = ReturnType<typeof useGetProductionCompanyLazyQuery>;
export type GetProductionCompanyQueryResult = Apollo.QueryResult<GetProductionCompanyQuery, GetProductionCompanyQueryVariables>;
export const GetProductionCountriesDocument = gql`
    query getProductionCountries {
  getProductionCountries {
    ... on ProductionCountry {
      id
      createdAt
      updatedAt
      iso_3166_1
      name
    }
  }
}
    `;

/**
 * __useGetProductionCountriesQuery__
 *
 * To run a query within a React component, call `useGetProductionCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductionCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductionCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductionCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetProductionCountriesQuery, GetProductionCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductionCountriesQuery, GetProductionCountriesQueryVariables>(GetProductionCountriesDocument, options);
      }
export function useGetProductionCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductionCountriesQuery, GetProductionCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductionCountriesQuery, GetProductionCountriesQueryVariables>(GetProductionCountriesDocument, options);
        }
export type GetProductionCountriesQueryHookResult = ReturnType<typeof useGetProductionCountriesQuery>;
export type GetProductionCountriesLazyQueryHookResult = ReturnType<typeof useGetProductionCountriesLazyQuery>;
export type GetProductionCountriesQueryResult = Apollo.QueryResult<GetProductionCountriesQuery, GetProductionCountriesQueryVariables>;
export const GetProductionCountryDocument = gql`
    query getProductionCountry($id: String!) {
  getProductionCountry(id: $id) {
    id
    createdAt
    updatedAt
    iso_3166_1
    name
  }
}
    `;

/**
 * __useGetProductionCountryQuery__
 *
 * To run a query within a React component, call `useGetProductionCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductionCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductionCountryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductionCountryQuery(baseOptions: Apollo.QueryHookOptions<GetProductionCountryQuery, GetProductionCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductionCountryQuery, GetProductionCountryQueryVariables>(GetProductionCountryDocument, options);
      }
export function useGetProductionCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductionCountryQuery, GetProductionCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductionCountryQuery, GetProductionCountryQueryVariables>(GetProductionCountryDocument, options);
        }
export type GetProductionCountryQueryHookResult = ReturnType<typeof useGetProductionCountryQuery>;
export type GetProductionCountryLazyQueryHookResult = ReturnType<typeof useGetProductionCountryLazyQuery>;
export type GetProductionCountryQueryResult = Apollo.QueryResult<GetProductionCountryQuery, GetProductionCountryQueryVariables>;
export const GetSpokenLanguagesDocument = gql`
    query getSpokenLanguages {
  getSpokenLanguages {
    ... on SpokenLanguage {
      id
      createdAt
      updatedAt
      iso_639_1
      name
      englishName
    }
  }
}
    `;

/**
 * __useGetSpokenLanguagesQuery__
 *
 * To run a query within a React component, call `useGetSpokenLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpokenLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpokenLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpokenLanguagesQuery(baseOptions?: Apollo.QueryHookOptions<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>(GetSpokenLanguagesDocument, options);
      }
export function useGetSpokenLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>(GetSpokenLanguagesDocument, options);
        }
export type GetSpokenLanguagesQueryHookResult = ReturnType<typeof useGetSpokenLanguagesQuery>;
export type GetSpokenLanguagesLazyQueryHookResult = ReturnType<typeof useGetSpokenLanguagesLazyQuery>;
export type GetSpokenLanguagesQueryResult = Apollo.QueryResult<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>;
export const GetSpokenLanguageDocument = gql`
    query getSpokenLanguage($id: String!) {
  getSpokenLanguage(id: $id) {
    id
    createdAt
    updatedAt
    iso_639_1
    name
    englishName
  }
}
    `;

/**
 * __useGetSpokenLanguageQuery__
 *
 * To run a query within a React component, call `useGetSpokenLanguageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpokenLanguageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpokenLanguageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSpokenLanguageQuery(baseOptions: Apollo.QueryHookOptions<GetSpokenLanguageQuery, GetSpokenLanguageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpokenLanguageQuery, GetSpokenLanguageQueryVariables>(GetSpokenLanguageDocument, options);
      }
export function useGetSpokenLanguageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpokenLanguageQuery, GetSpokenLanguageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpokenLanguageQuery, GetSpokenLanguageQueryVariables>(GetSpokenLanguageDocument, options);
        }
export type GetSpokenLanguageQueryHookResult = ReturnType<typeof useGetSpokenLanguageQuery>;
export type GetSpokenLanguageLazyQueryHookResult = ReturnType<typeof useGetSpokenLanguageLazyQuery>;
export type GetSpokenLanguageQueryResult = Apollo.QueryResult<GetSpokenLanguageQuery, GetSpokenLanguageQueryVariables>;