import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { DynamoTables } from '../../types/dynamoTables.enum';

const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  let sentMovies;
  try {
    const body = JSON.parse(event.body ?? ``);
    sentMovies = body.movies;
  } catch (eventError) {
    return {
      statusCode: 400,
      body: `The body sent could not be serialized`,
    };
  }

  if (!sentMovies || !sentMovies.length) {
    return {
      statusCode: 400,
      body: `No movies were sent`,
    };
  }

  let currentMovies;

  try {
    currentMovies = await new DynamoDB()
      .scan({
        TableName: DynamoTables.MEDIA,
        FilterExpression: `mediaType = :movie`,
        ExpressionAttributeValues: {
          ':movie': {
            S: 'movie',
          },
        },
      })
      .promise()
      .then(({ Items }) => Items);
  } catch (tableReadError) {
    console.error(tableReadError);
    return {
      statusCode: 500,
      body: `Current Movies could not be read`,
    };
  }

  let newMovies;

  try {
    const dynamoMoviesMap = new Map<string, null>();
    currentMovies?.forEach?.(({ title: { S } }) => dynamoMoviesMap.set(S ?? ``, null));

    newMovies = sentMovies.reduce(
      (all: string[], current: { title: string; tmdbId: string }) =>
        dynamoMoviesMap.has(current.title) ? all : [...all, current],
      []
    );
  } catch (movieComparisonError) {
    console.error(movieComparisonError);
    return {
      statusCode: 500,
      body: `Error sorting the new vs old movies`,
    };
  }

  if (!newMovies.length)
    return {
      statusCode: 200,
      body: `No new movies were added`,
    };

  try {
    return new DynamoDB()
      .batchWriteItem({
        RequestItems: {
          nas_media: newMovies.slice(0, 25).map(({ tmdbId, title }: { tmdbId: string; title: string }) => ({
            PutRequest: {
              Item: {
                id: {
                  S: uuidv4(),
                },
                mediaType: {
                  S: `movie`,
                },
                tmdbId: {
                  S: tmdbId,
                },
                title: {
                  S: title,
                },
              },
            },
          })),
        },
      })
      .promise()
      .then(() => ({
        statusCode: 200,
        body: `Movies dumped`,
      }));
  } catch (batchInsertError) {
    console.error(batchInsertError);
    return {
      statusCode: 500,
      body: `Please try again later`,
    };
  }
};

exports.handler = handler;
