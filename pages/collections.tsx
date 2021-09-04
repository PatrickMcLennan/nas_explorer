import { Box, Button, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { gql } from 'graphql-request';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { nodeGraphQl } from '../clients/nodeGraphql.client';
import { Banner } from '../components/Banner/Banner';
import { Header } from '../components/Header/Header';
import { Collection, GetCollectionsQuery, Pagination } from '../types/generated.types';
import Link from 'next/link';
import { formatTmdbImageUrl } from '../lib/formatTmdbImageUrl.lib';
import { SEO } from '../components/SEO/SEO';

type Props = {
  collections: Collection[];
  pagination: Pagination;
  error: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    '& .MuiButton-label': {
      display: `flex`,
      alignItems: `stretch`,
      justifyContent: `flex-start`,
      flexDirection: `column`,
    },
  },
  container: {
    padding: theme.spacing(0, 6),
  },
  heading: {
    marginBottom: `1rem`,
  },
  image: {
    width: `100%`,
    display: `block`,
    objectFit: `cover`,
  },
  name: {
    fontSize: `1.6rem`,
    marginTop: theme.spacing(1),
    textTransform: `none`,
  },
}));

export default function Collections({ collections, pagination }: Props) {
  const [randomCollection, setRandomCollection] = useState(collections[Math.floor(Math.random() * collections.length)]);
  let currentTimeout = useRef<any>();
  const classes = useStyles();

  const changeCollection = useCallback(
    () => setRandomCollection(collections[Math.floor(Math.random() * collections.length)]),
    []
  );

  useEffect(() => {
    clearTimeout(currentTimeout?.current);
    currentTimeout.current = setTimeout(changeCollection, 15000);

    return () => clearTimeout(currentTimeout?.current);
  });

  return (
    <>
      <SEO title="Collections | " description="View all movie collections" image="/not-found-background.jpeg" />
      <Box>
        <Header />
        <Banner collection={randomCollection} />
        <Box className={classes.container}>
          <Typography className={classes.heading} variant="h3" component="h3">
            Collections
          </Typography>
          <Grid container spacing={1}>
            {collections.map((collection) => (
              <Grid key={collection.id} item lg={2} md={3} xs={6}>
                <Link href={`/collection/${collection.id}`} passHref>
                  <Button className={classes.card} component="a">
                    <img
                      alt={collection.name}
                      className={classes.image}
                      src={formatTmdbImageUrl(`/w200/${collection?.posterPath ?? collection?.backdropPath}`)}
                      onError={(err) => {
                        const image = err.target as HTMLImageElement;
                        image.src = '/not-found-background.jpeg';
                      }}
                    />
                    <Typography className={classes.name} component="h4">
                      {collection.name}
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export const getStaticProps = async () =>
  nodeGraphQl
    .request(
      gql`
        query getCollections {
          getCollections {
            collections {
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
            pagination {
              total
            }
          }
        }
      `
    )
    .then(({ getCollections }: GetCollectionsQuery) => {
      return {
        props: {
          collections: getCollections?.collections,
          pagination: getCollections?.pagination,
          notFound: false,
        },
      };
    })
    .catch((err) => {
      console.error(err);
      return {
        props: {
          movie: {},
          pagination: {},
          notFound: true,
        },
      };
    });
