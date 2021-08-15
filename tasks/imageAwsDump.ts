/**
 * Scan local dir for all images, send to AWS to update DynamoDB
 */
import { promises } from 'fs';
import { awsAxiosClient } from '../clients/awsAxios.client';
import { IMAGES_DIR } from '../env';
import isImage from 'is-image';

async function dumpImages() {
  let images;

  try {
    const allFiles = await promises.readdir(IMAGES_DIR?.toString?.() ?? ``);
    images = allFiles.filter((fileName) => isImage(fileName));
  } catch (dirError) {
    console.error(`There was a problem reading ${IMAGES_DIR}: \n${dirError}`);
    return process.exit(1);
  }

  try {
    await awsAxiosClient({
      method: `POST`,
      url: `/images`,
      data: {
        images,
      },
    });
  } catch (axiosError) {
    console.error(`Error returned from axios + aws: \n${axiosError}`);
    return process.exit(1);
  }

  return process.exit(0);
}

dumpImages();
