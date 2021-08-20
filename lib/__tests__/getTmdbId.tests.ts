import getTmdbId from '../getTmdbId.lib';

describe(`getTmdbId`, () => {
  it(`should return an id on a valid filename`, () => expect(getTmdbId(`whatever [1234].avi`)).toBe(`1234`));

  it(`should return an empty string on an invalid filename`, () => expect(getTmdbId(`whatever.avi`)).toBe(``));
});
