import { promises } from 'fs';
import { IMAGES_DIR } from '../../env';

export const imageResolvers = {
  getImages: async (_: any, { page }: { page: number }) => {
    try {
      const images = await promises.readdir(IMAGES_DIR?.toString() ?? ``);
      return images.slice(page * 20 - 20, page * 20);
    } catch (imageError) {
      console.error(imageError);
    }
  },
};
