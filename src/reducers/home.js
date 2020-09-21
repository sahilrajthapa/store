import * as types from '../actions/home';

const initialState = {
  getDashboardDataRequest: false,
  getDashboardDataSuccess: false,
  getDashboardDataFailure: false,

  information: [],
  categories: [],
  featuredItems: [],
  bestSellItems: [],
};

function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_DASHBOARD_DATA_REQUEST:
      return {
        ...state,
        getDashboardDataRequest: true,
      };
    case types.GET_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        getDashboardDataSuccess: true,
        getDashboardDataRequest: false,
        categories: action.payload.categories,
        featuredItems: action.payload.featured_items,
        bestSellItems: action.payload.best_sell_items,
      };

    case types.GET_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        getDashboardDataFailure: true,
        getDashboardDataRequest: false,
      };

    case types.GET_INFORMATION_SUCCESS:
      console.log('payload', action.payload);
      return {
        ...state,
        information: action.payload,
      };

    default: {
      return state;
    }
  }
}
export default loginReducer;
