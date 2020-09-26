import {api, authenticated} from './index';

export const getCustomers = () =>
  authenticated(api).then(apiInstance => apiInstance.get('/customers/'));
