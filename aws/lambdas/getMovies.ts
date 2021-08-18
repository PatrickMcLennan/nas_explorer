import type { APIGatewayProxyResultV2 } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

const handler = async (): Promise<APIGatewayProxyResultV2> => {
  let currentMovies;

  try {
    currentMovies = await new DynamoDB()
      .scan({
        TableName: `nas_media`,
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
      body: `Error accesing movies in Dynamo`,
    };
  }

  if (!currentMovies) {
    return {
      statusCode: 500,
      body: `Error accesing movies in Dynamo`,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      currentMovies?.map(({ mediaType, id, title, tmdbId }: any) => ({
        mediaType: mediaType.S,
        id: id.S,
        title: title.S,
        tmdbId: tmdbId.S,
      }))
    ),
  };
};

exports.handler = handler;
