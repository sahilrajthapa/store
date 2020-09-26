import {api, authenticated} from './index';

export const getOrder = () =>
  authenticated(api).then(apiInstance => apiInstance.get('/order/'));

export const postOrder = payload =>
  authenticated(api).then(apiInstance => apiInstance.post('/order/', payload));
