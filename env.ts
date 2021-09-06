import { config } from 'dotenv';

config({ path: `./.env` });

export const NODE_ENV = process.env.NODE_ENV;

export const POSTGRES_HOST = process.env.POSTGRES_HOST;
export const POSTGRES_USER = process.env.POSTGRES_USER;
export const POSTGRES_PORT = process.env.POSTGRES_PORT;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_DB = process.env.POSTGRES_DB;

export const DATABASE_URL_DEVELOPMENT = process.env.DATABASE_URL_DEVELOPMENT;
export const DATABASE_URL_PRODUCTION = process.env.DATABASE_URL_PRODUCTION;
export const DATABASE_URL_TEST = process.env.DATABASE_URL_TEST;

export const WIDESCREEN_WALLPAPERS = process.env.WIDESCREEN_WALLPAPERS;
export const WALLPAPER_PLAY = process.env.WALLPAPER_PLAY;
export const WALLHAVEN = process.env.WALLHAVEN;

export const ALPHA_CODERS = process.env.ALPHA_CODERS;
export const EXPRESS = process.env.EXPRESS;

export const IMAGES_DIR = process.env.IMAGES_DIR;
export const MOVIES_DIR = process.env.MOVIES_DIR;
export const TV_DIR = process.env.TV_DIR;
export const MUSIC_DIR = process.env.MUSIC_DIR;

export const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const HTTP_PORT = process.env.HTTP_PORT;

export const API_GATEWAY = process.env.API_GATEWAY;

export const REDIS_PORT = process.env.REDIS_PORT;

export const APPLICATION_SECRET = process.env.APPLICATION_SECRET;
