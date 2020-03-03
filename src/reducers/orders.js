import * as types from '../actions/orders';

const initialState = {
  // events
  getOrderRequest: false,
  getOrderSuccess: false,
  getOrderFailure: false,

  // data
  orders: [],
};

function ordersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_ORDER_REQUEST:
      return {
        ...state,
        getOrderRequest: true,
      };
    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        getOrderSuccess: true,
        getOrderRequest: false,
        orders: action.payload,
      };

    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        getOrderFailure: true,
        getOrderRequest: false,
      };

    default: {
      return state;
    }
  }
}

export default ordersReducer;
