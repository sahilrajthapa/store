import action from './actionCreator';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILURE = 'POST_ORDER_FAILURE';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILURE = 'GET_ORDER_FAILURE';

export const postOrderRequest = action(POST_ORDER_REQUEST, 'payload');

export const getOrderRequest = action(GET_ORDER_REQUEST);