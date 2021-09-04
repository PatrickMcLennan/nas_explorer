import { Box } from '@material-ui/core';
import { gql } from 'graphql-request';
import { nodeGraphQl } from '../../clients/nodeGraphql.client';
import { Banner } from '../../components/Banner/Banner';
import { Header } from '../../components/Header/Header';
import { SEO } from '../../components/SEO/SEO';
import { Collection } from '../../types/generated.types';

type Params = {
  id: string;
};

type Props = {
  collection: Collection;
};

export default function CollectionPage({ collection }: Props) {
  return (
    <>
      <SEO
        title={`${collection.name} | `}
        description={collection?.overview ?? `Overview for ${collection.name}`}
        image={collection?.posterPath ?? collection?.backdropPath ?? `/not-found-background.jpeg`}
      />
      <Box>
        <Header />
        <Banner collection={collection} />
      </Box>
    </>
  );
}

export const getStaticPaths = async () =>
  nodeGraphQl
    .request(
      gql`
        query getCollections {
          getCollections {
            collections {
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
            pagination {
              total
            }
          }
        }
      `
    )
    .then(({ getCollections }) => ({
      paths: getCollections?.collections?.map?.((collection: Collection) => ({
        params: {
          id: collection?.id?.toString(),
        },
      })),
      fallback: false,
    }))
    .catch((error) => {
      console.error(error);
      return {
        paths: [
          {
            params: {
              name: `404`,
              id: `404`,
            },
          },
        ],
        fallback: false,
      };
    });

export const getStaticProps = async ({ params: { id } }: { params: Params }) =>
  nodeGraphQl
    .request(
      gql`
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
      `,
      {
        id,
      }
    )
    .then(({ getCollection }) => ({
      props: {
        collection: getCollection,
        notFound: false,
      },
    }))
    .catch((err) => {
      console.error(err);
      return {
        props: {
          collection: {},
          notFound: true,
        },
      };
    });
