import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { S3 } from 'aws-sdk';
import { DynamoTables } from '../../types/dynamoTables.enum';

const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  let body;

  try {
    body = JSON.parse(event.body ?? ``);
  } catch (bodyParseError) {
    console.error(bodyParseError);
    return {
      statusCode: 400,
      body: `The body sent could not be serialized`,
    };
  }

  const sentItemStats = body?.item;
  if (!sentItemStats) {
    return {
      statusCode: 400,
      body: `Empty request`,
    };
  }

  const { contentType, size, bucket, name } = sentItemStats;
  if (!contentType || !size || !bucket || !name) {
    return {
      statusCode: 400,
      body: `Bad request`,
    };
  }

  const badBucket = !Object.values(DynamoTables).includes(bucket);
  if (!badBucket) {
    return {
      statusCode: 400,
      body: `Bad request`,
    };
  }

  const s3 = new S3();

  const params = {
    Bucket: bucket,
    Key: name,
    ContentType: `application/octet-stream`,
    Expires: 60 * 2,
  } as const;

  return s3
    .getSignedUrlPromise(`putObject`, params)
    .then((url) => ({
      statusCode: 201,
      body: url,
    }))
    .catch((err) => {
      console.error(err);
      return {
        statusCode: 400,
        body: `Error generating URL`,
      };
    });
};

exports.handler = handler;
