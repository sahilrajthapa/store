import {api, authenticated} from './index';

export const getInformation = params =>
  authenticated(api).then(apiInstance =>
    apiInstance.get('/notifications/', {params}),
  );
