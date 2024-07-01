// frontend/src/services/roomService.js
import axios from 'axios';
import { getToken } from './authService';

const config = {
  headers: { Authorization: `Bearer ${getToken()}` }
};

export const createRoom = async (roomData) => {
  const response = await axios.post('/api/rooms', roomData, config);
  return response.data;
};

export const getRooms = async () => {
  const response = await axios.get('/api/rooms', config);
  return response.data;
};

export const updateRoom = async (id, roomData) => {
  const response = await axios.put(`/api/rooms/${id}`, roomData, config);
  return response.data;
};

export const deleteRoom = async (id) => {
  const response = await axios.delete(`/api/rooms/${id}`, config);
  return response.data;
};
