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
};

export type DynamoMovie = {
  __typename?: 'DynamoMovie';
  title: Scalars['String'];
  tmdbId: Scalars['String'];
  id: Scalars['String'];
  mediaType: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  name: Scalars['String'];
};

export type PostgresMovie = {
  __typename?: 'PostgresMovie';
  title: Scalars['String'];
  tmdbId: Scalars['String'];
  id: Scalars['String'];
  mediaType: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getImages?: Maybe<Array<Maybe<Image>>>;
  getDynamoMovies?: Maybe<Array<Maybe<DynamoMovie>>>;
  getPostgresMovies?: Maybe<Array<Maybe<PostgresMovie>>>;
  getPostgresMovie: PostgresMovie;
};


export type QueryGetImagesArgs = {
  page: Scalars['Int'];
};


export type QueryGetPostgresMovieArgs = {
  id: Scalars['String'];
};

export type GetImagesQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetImagesQuery = { __typename?: 'Query', getImages?: Maybe<Array<Maybe<{ __typename?: 'Image', name: string }>>> };

export type GetDynamoMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDynamoMoviesQuery = { __typename?: 'Query', getDynamoMovies?: Maybe<Array<Maybe<{ __typename?: 'DynamoMovie', title: string, tmdbId: string, id: string, mediaType: string }>>> };

export type GetPostgresMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostgresMoviesQuery = { __typename?: 'Query', getPostgresMovies?: Maybe<Array<Maybe<{ __typename?: 'PostgresMovie', title: string, tmdbId: string, id: string, mediaType: string }>>> };

export type GetPostgresMovieQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostgresMovieQuery = { __typename?: 'Query', getPostgresMovie: { __typename?: 'PostgresMovie', title: string, tmdbId: string, id: string, mediaType: string } };


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
    title
    tmdbId
    id
    mediaType
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
    title
    tmdbId
    id
    mediaType
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