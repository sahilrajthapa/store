import axios from 'axios';

axios.defaults.baseURL = 'http://139.59.67.104:8097/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export function getApi(url) {
  return axios.get(url);
}

export async function postApi(url, payload) {
  try {
    return await axios.post(url, payload);
  } catch (err) {
    return err.response;
  }
}
