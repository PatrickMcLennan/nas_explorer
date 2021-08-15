import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';

const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  console.log(event);
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `Hello world!\n`,
  };
};

exports.handler = handler;
