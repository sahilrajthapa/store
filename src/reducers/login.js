import * as types from '../actions/login';

const initialState = {
  loginRequest: false,
  loginSucess: false,
  loginFailure: false,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loginRequest: true,
        loginSucess: false,
        loginFailure: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginSucess: true,
        loginRequest: false,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        loginFailure: true,
        loginRequest: false,
      };

    default: {
      return state;
    }
  }
}
export default loginReducer;
