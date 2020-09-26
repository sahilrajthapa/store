import {api, authenticated} from './index';

export const getContacts = () =>
  authenticated(api).then(apiInstance => apiInstance.get('/contacts/'));
