import {api, authenticated} from './index';

export const getCategories = () =>
  authenticated(api).then(apiInstance => apiInstance.get('/categories/'));
