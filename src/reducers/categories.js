import * as types from '../actions/categories';

const initialState = {
  getCategoriesRequest: false,
  getCategoriesSuccess: false,
  getCategoriesFailure: false,
  categories: [],
};

function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        getCategoriesRequest: true,
      };
    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        getCategoriesSuccess: true,
        getCategoriesRequest: false,
        categories: action.payload,
      };

    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        getCategoriesFailure: true,
        getCategoriesRequest: false,
      };

    default: {
      return state;
    }
  }
}
export default categoriesReducer;
