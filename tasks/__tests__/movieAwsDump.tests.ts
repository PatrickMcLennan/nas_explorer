import * as awsAxios from '../../clients/awsAxios.client';
import * as fs from 'fs';
import { dumpMovies } from '../movieAwsDump';
import { MOVIES_DIR } from '../../env';

const getSpy = jest.spyOn(awsAxios.awsAxiosClient, `get`).mockResolvedValue({ data: [{ tmdbId: `1` }] });
const postSpy = jest.spyOn(awsAxios.awsAxiosClient, `post`).mockResolvedValue({ data: {} });
const exitSpy = jest.spyOn(process, `exit`).mockImplementation();
const fsSpy = jest.spyOn(fs.promises, `readdir`).mockResolvedValue([`png.png`, `old [1].txt`, `new [2].mkv`] as fs.Dirent[]);


describe(`movieAwsDump`, () => {
  // afterEach(() => {
  //   fsMock.mockClear();
  // });
  it(`should call the fs module to read the directory`, async () => {
    await dumpMovies();

    expect(fsSpy).toBeCalledTimes(1);
    expect(fsSpy).toBeCalledWith(MOVIES_DIR);
  });

  it(`should GET dynamo to get the list of movies`, async () => {
    await dumpMovies();

    expect(getSpy).toBeCalledTimes(1);
  });

  it(`should POST dynamo with only the new movies`, async () => {
    await dumpMovies();

    expect(postSpy).toBeCalledTimes(1);
    expect(postSpy).toBeCalledWith({
      data: {
        movies: [`new [2].mkv`],
      },
    });
  });
});
