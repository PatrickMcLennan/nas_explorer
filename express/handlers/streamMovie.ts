import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { MOVIES_DIR } from '../../env';

export const streamMovieHandler = (req: Request, res: Response) => {
  const range = req.headers.range;

  if (!range) {
    return res.status(400).send(`Requires Range Header`);
  }

  const videoPath = path.join(MOVIES_DIR ?? ``, req.params.fileName);
  let videoSize;
  try {
    videoSize = fs?.statSync?.(videoPath)?.size;
  } catch (fsError) {
    console.error(fsError);
    return res.status(404).send(`Video not found`);
  }

  if (!videoSize) {
    return res.status(404).send(`Video not found`);
  }

  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range?.replace(/\D/g, ''));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  const contentLength = end - start + 1;
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };

  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });

  return videoStream.pipe(res);
};
