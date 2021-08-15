import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  let sentImages;
  try {
    const body = JSON.parse(event.body ?? ``);
    sentImages = body.images;
  } catch (eventError) {
    return {
      statusCode: 400,
      body: `The body sent could not be serialized`,
    };
  }

  if (!sentImages || !sentImages.length) {
    return {
      statusCode: 400,
      body: `No images were sent`,
    };
  }

  let currentImages;

  try {
    currentImages = await new DynamoDB()
      .scan({
        TableName: `nas_media`,
        FilterExpression: `mediaType = :image`,
        ExpressionAttributeValues: {
          ':image': {
            S: 'image',
          },
        },
      })
      .promise()
      .then(({ Items }) => Items);
  } catch (tableReadError) {
    console.error(tableReadError);
    return {
      statusCode: 500,
      body: `Current Images could not be read`,
    };
  }

  let newImages;

  try {
    const dynamoImagesMap = new Map<string, null>();
    currentImages?.forEach?.(({ id: { S } }) => dynamoImagesMap.set(S ?? ``, null));

    newImages = sentImages.reduce(
      (all: string[], current: string) => (dynamoImagesMap.has(current) ? all : [...all, current]),
      []
    );
  } catch (imageComparisonError) {
    console.error(imageComparisonError);
    return {
      statusCode: 500,
      body: `Error sorting the new vs old images`,
    };
  }

  if (!newImages.length)
    return {
      statusCode: 200,
      body: `No new images were added`,
    };

  try {
    return new DynamoDB()
      .batchWriteItem({
        RequestItems: {
          nas_media: newImages.map((image: string) => ({
            PutRequest: {
              Item: {
                id: {
                  S: image,
                },
                mediaType: {
                  S: `image`,
                },
              },
            },
          })),
        },
      })
      .promise()
      .then((res) => {
        console.log(res);
        return {
          statusCode: 200,
          body: `Images dumped`,
        };
      });
  } catch (batchInsertError) {
    console.error(batchInsertError);
    return {
      statusCode: 500,
      body: `Please try again later`,
    };
  }
};

exports.handler = handler;
