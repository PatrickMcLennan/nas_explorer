import axios from 'axios';
import { promises } from 'fs';
import { awsAxiosClient } from '../clients/awsAxios.client';
import { S3Buckets } from '../types/s3Buckets.enum';

async function dumpExistingPostgresBackup() {
  const currentDump = await promises.readdir(`/app/postgres/backups`);
  const name = currentDump?.[0];

  if (!currentDump.length || !name) {
    console.error(`There were no backups in the ${'/app/postgres/backups'}`);
    return process.exit(1);
  }

  if (currentDump.length >= 2) {
    console.error(`Mulitple backups, problem:  ${currentDump.length} exist.  There should only be 1.`);
    return process.exit(1);
  }

  const filePath = `/app/postgres/backups/${name}`;
  const contentType = `gz`;
  const bucket = S3Buckets.BACKUPS;
  const { size } = await promises.stat(filePath);

  let presignedUrl;

  try {
    const res = await awsAxiosClient({
      method: `POST`,
      url: `/presignedUrl`,
      data: {
        item: {
          contentType,
          size,
          bucket,
          name,
        },
      },
    });
    presignedUrl = res.data;
  } catch (presignedUrlError) {
    console.error(presignedUrlError);
    return process.exit(1);
  }

  if (!presignedUrl) {
    console.error(`No presignedUrl was returned`);
    return process.exit(1);
  }

  const file = await promises.readFile(filePath);

  await axios({
    method: `PUT`,
    url: presignedUrl,
    data: file,
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  }).catch((err) => {
    console.error(err);
    return process.exit(1);
  });

  await promises.unlink(filePath).catch((err) => {
    console.error(err);
    return process.exit(1);
  });

  return process.exit(0);
}

dumpExistingPostgresBackup();
