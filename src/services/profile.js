import {api, authenticated} from './index';

export const getProfile = () =>
  authenticated(api).then(apiInstance => apiInstance.get('/profile/'));
