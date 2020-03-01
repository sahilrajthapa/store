import * as types from '../actions/products';

const initialState = {
  // ui
  searchText: '',

  // events
  getProductsRequest: false,
  getProductsSuccess: false,
  getProductsFailure: false,
  searchProductRequest: false,
  searchProductSuccess: false,
  searchProductFailure: false,

  // data
  products: [],
  searchedProducts: [],
  selectedProduct: {},
};

function productsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        getProductsRequest: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        getProductsSuccess: true,
        getProductsRequest: false,
        products: action.payload,
      };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        getProductsFailure: true,
        getProductsRequest: false,
      };

    case types.GET_PRODUCT_BY_ID:
      return {
        ...state,
        selectedProduct: state.products.find(
          product => product.id === action.payload.productId,
        ),
      };

    case types.HANDLE_SEARCH_TEXT_CHANGE:
      return {
        ...state,
        searchText: action.payload,
      };
    case types.SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        searchProductRequest: true,
      };

    case types.SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        searchProductRequest: false,
        searchProductSuccess: true,
        searchedProducts: action.payload,
        searchText: '',
      };

    case types.SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        searchProductRequest: false,
        searchProductFailure: true,
      };

    default: {
      return state;
    }
  }
}

export default productsReducer;
