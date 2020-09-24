import {api, authenticated} from './index';

export const getInformation = params =>
  authenticated(api).then(apiInstance =>
    apiInstance.get('/notifications/', {params}),
  );

export const postNotificationMessage = payload =>
  authenticated(api).then(apiInstance =>
    apiInstance.post('/notification-message/', payload),
  );
