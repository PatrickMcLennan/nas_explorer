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
};

export type Image = {
  __typename?: 'Image';
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getImages?: Maybe<Array<Maybe<Image>>>;
};


export type QueryGetImagesArgs = {
  page: Scalars['Int'];
};

export type GetImagesQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetImagesQuery = { __typename?: 'Query', getImages?: Maybe<Array<Maybe<{ __typename?: 'Image', name: string }>>> };
