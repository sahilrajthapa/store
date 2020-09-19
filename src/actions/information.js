import action from './actionCreator';

export const GET_INFORMATION_REQUEST = 'GET_INFORMATION_REQUEST';
export const GET_INFORMATION_SUCCESS = 'GET_INFORMATION_SUCCESS';
export const GET_INFORMATION_FAILURE = 'GET_INFORMATION_FAILURE';

export const getInformationRequest = action(GET_INFORMATION_REQUEST);
