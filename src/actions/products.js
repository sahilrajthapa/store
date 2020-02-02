import action from './actionCreator';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';

export const getProductsRequest = action(GET_PRODUCTS_REQUEST, 'payload');

export const getProductById = action(GET_PRODUCT_BY_ID, 'payload');
