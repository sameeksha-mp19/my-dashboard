// frontend/src/services/reportService.js
import axios from 'axios';
import { getToken } from './authService';

const config = {
  headers: { Authorization: `Bearer ${getToken()}` }
};

export const exportReport = async (format) => {
  const response = await axios.get(`/api/reports/export/${format}`, {
    responseType: 'blob',
    ...config
  });
  return response.data;
};
