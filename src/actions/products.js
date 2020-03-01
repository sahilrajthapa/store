import action from './actionCreator';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';

export const SEARCH_PRODUCT_REQUEST = 'SEARCH_PRODUCT_REQUEST';
export const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCCESS';
export const SEARCH_PRODUCT_FAILURE = 'SEARCH_PRODUCT_FAILURE';

export const HANDLE_SEARCH_TEXT_CHANGE = 'HANDLE_SEARCH_TEXT_CHANGE';

export const getProductsRequest = action(GET_PRODUCTS_REQUEST, 'payload');

export const searchProductRequest = action(SEARCH_PRODUCT_REQUEST, 'payload');

export const handleSearchTextChange = action(
  HANDLE_SEARCH_TEXT_CHANGE,
  'payload',
);

export const getProductById = action(GET_PRODUCT_BY_ID, 'payload');
