import axios from 'axios';
import { DUMMY_JSON_API_URL } from '../utils/constants';

export const apiClient = axios.create({
  baseURL: DUMMY_JSON_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
