import {api, authenticated} from './index';

export const getContacts = () =>
  authenticated(api).then(apiInstance => apiInstance.get('/contacts/'));

export const postMessage = payload =>
  authenticated(api).then(apiInstance =>
    apiInstance.post('/customer-query/', payload),
  );
