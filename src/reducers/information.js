import * as types from '../actions/home';

const initialState = {
  loader: false,
  information: [],
};

function informationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_INFORMATION_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case types.GET_INFORMATION_SUCCESS:
      return {
        ...state,
      };

    default: {
      return state;
    }
  }
}
export default informationReducer;
