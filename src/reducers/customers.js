import * as types from '../actions/customers';

const initialState = {
  customers: [],
};

function customersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CUSTOMERS_SUCCESS:
      return {
        ...state,

        customers: action.payload,
      };

    default: {
      return state;
    }
  }
}
export default customersReducer;
