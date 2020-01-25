import * as types from '../actions/login';

const initialState = {};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
      };

    default: {
      return state;
    }
  }
}
export default loginReducer;
