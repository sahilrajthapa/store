import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const config = {
  baseURL: 'http://139.59.67.104:8097/api/v1',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = axios.create(config);

export const authenticated = async apiInstance => {
  const token = await AsyncStorage.getItem('token');
  apiInstance.defaults.headers.common.Authorization = `Token ${token}`;
  return apiInstance;
};
