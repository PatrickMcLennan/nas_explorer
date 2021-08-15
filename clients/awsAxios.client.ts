import axios from 'axios';
import { API_GATEWAY } from '../env';

export const awsAxiosClient = axios.create({
  baseURL: API_GATEWAY,
});
