import * as types from '../actions/products';

const initialState = {
  getProductsRequest: false,
  getProductsSuccess: false,
  getProductsFailure: false,
  products: [],
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

    default: {
      return state;
    }
  }
}

export default productsReducer;
