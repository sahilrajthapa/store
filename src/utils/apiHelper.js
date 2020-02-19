import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

axios.defaults.baseURL = 'http://139.59.67.104:8097/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function getApi(url) {
  try {
    const token = await AsyncStorage.getItem('token');

    return await axios.get(url, {
      headers: {...(token && {Authorization: `Token ${token}`})},
    });
  } catch (err) {
    return err.response;
  }
}

export async function postApi(url, payload) {
  try {
    let token;
    if (url === '/api-auth/') {
      token = '';
    } else {
      token = await AsyncStorage.getItem('token');
    }

    return await axios.post(url, payload, {
      headers: {...(token && {Authorization: `Token ${token}`})},
    });
  } catch (err) {
    return err.response;
  }
}
