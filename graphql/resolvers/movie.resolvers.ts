import { awsAxiosClient } from '../../clients/awsAxios.client';

export const movieResolvers = {
  getDynamoMovies: async () => {
    try {
      const { data } = await awsAxiosClient({
        method: `GET`,
        url: `/movies`,
      });
      return data;
    } catch (movieError) {
      console.error(movieError);
    }
  },
};
