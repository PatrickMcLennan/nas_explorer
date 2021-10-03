import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apiGateway from '@aws-cdk/aws-apigateway';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as s3 from '@aws-cdk/aws-s3';
import { DynamoTables } from '../types/dynamoTables.enum';
import { S3Buckets } from '../types/s3Buckets.enum';

export class NasMediaStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const moviesApi = new apiGateway.RestApi(this, `nas_media_api`);
    const api = moviesApi.root.addResource(`api`);
    const v1 = api.addResource(`v1`);

    const images = v1.addResource(`images`);
    const movies = v1.addResource(`movies`);
    const presignedUrl = v1.addResource(`presignedUrl`);

    const mediaTable = new dynamodb.Table(this, DynamoTables.MEDIA, {
      tableName: DynamoTables.MEDIA,
      partitionKey: {
        name: `id`,
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: `mediaType`,
        type: dynamodb.AttributeType.STRING,
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const backupsBucket = new s3.Bucket(this, S3Buckets.BACKUPS, {
      bucketName: S3Buckets.BACKUPS,
      /**
       * TODO:
       *
       *  - Passing in these options breaks webpack prod builds.
       *
       *                       ?!??!
       *
       *                   Look into this
       */
      // autoDeleteObjects: true,
      // removalPolicy: cdk.RemovalPolicy.DESTROY,
      // lifecycleRules: [
      //   {
      //     expiration: cdk.Duration.days(2),
      //   },
      // ],
    });

    const helloHandler = new lambda.Function(this, `HelloHandler`, {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('./aws/dist'),
      handler: 'hello.handler',
    });
    v1.addMethod(`GET`, new apiGateway.LambdaIntegration(helloHandler));

    const postImagesHandler = new lambda.Function(this, `PostImagesHandler`, {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset(`./aws/dist`),
      handler: `postImages.handler`,
      functionName: `nas_media_post_images`,
    });
    images.addMethod(`POST`, new apiGateway.LambdaIntegration(postImagesHandler));

    const getMoviesHandler = new lambda.Function(this, `GetMoviesHandler`, {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset(`./aws/dist`),
      handler: `getMovies.handler`,
      functionName: `nas_media_get_movies`,
    });
    movies.addMethod(`GET`, new apiGateway.LambdaIntegration(getMoviesHandler));

    const postMoviesHandler = new lambda.Function(this, `PostMoviesHandler`, {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset(`./aws/dist`),
      handler: `postMovies.handler`,
      functionName: `nas_media_post_movies`,
    });
    movies.addMethod(`POST`, new apiGateway.LambdaIntegration(postMoviesHandler));

    const postPresignedUrlHandler = new lambda.Function(this, `PostPresignedUrl`, {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset(`./aws/dist`),
      handler: `presignedUrl.handler`,
      functionName: `nas_media_post_presigned_url`,
    });
    presignedUrl.addMethod(`POST`, new apiGateway.LambdaIntegration(postPresignedUrlHandler));

    mediaTable.grantReadWriteData(postImagesHandler);
    mediaTable.grantReadWriteData(postMoviesHandler);
    mediaTable.grantReadWriteData(getMoviesHandler);

    backupsBucket.grantReadWrite(postPresignedUrlHandler);
  }
}
