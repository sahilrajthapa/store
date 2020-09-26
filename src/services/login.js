import {api} from './index';

export const postAuth = payload => api.post('/api-auth/', payload);
