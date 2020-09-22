import {api, authenticated} from './index';

export const getProducts = params =>
  authenticated(api).then(apiInstance =>
    apiInstance.get('/products/', {params}),
  );
