import * as cdk from '@aws-cdk/core';
import { Function, Runtime, Code } from '@aws-cdk/aws-lambda';
import { LambdaIntegration, RestApi } from '@aws-cdk/aws-apigateway';
import { Table, AttributeType } from '@aws-cdk/aws-dynamodb';

export class Stack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const moviesApi = new RestApi(this, `movies-api`);
    const api = moviesApi.root.addResource(`api`);
    const v1 = api.addResource(`v1`);

    const images = v1.addResource(`images`);

    let table = Table.fromTableName(this, `nas_media`, `nas_media`);

    if (!table) {
      table = new Table(this, `nas_media`, {
        partitionKey: {
          name: `id`,
          type: AttributeType.STRING,
        },
        sortKey: {
          name: `mediaType`,
          type: AttributeType.STRING,
        },
      });
    }

    const helloHandler = new Function(this, `HelloHandler`, {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset('./aws/dist'),
      handler: 'hello.handler',
    });
    v1.addMethod(`GET`, new LambdaIntegration(helloHandler));

    const postImagesHandler = new Function(this, `PostImagesHandler`, {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(`./aws/dist`),
      handler: `postImages.handler`,
    });
    images.addMethod(`POST`, new LambdaIntegration(postImagesHandler));

    table.grantReadWriteData(postImagesHandler);
  }
}
