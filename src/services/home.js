import {api, authenticated} from './index';

export const getDashboardData = () =>
  authenticated(api).then(apiInstance =>
    apiInstance.get('/dashboard/', {params}),
  );
