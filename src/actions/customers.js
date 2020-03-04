import action from './actionCreator';

export const GET_CUSTOMERS_REQUEST = 'GET_CUSTOMERS_REQUEST';
export const GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS';
export const GET_CUSTOMERS_FAILURE = 'GET_CUSTOMERS_FAILURE';

export const getCustomersRequest = action(GET_CUSTOMERS_REQUEST);
