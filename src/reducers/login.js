import * as types from '../actions/login';

const initialState = {
  loginRequest: false,
  loginSuccess: false,
  loginFailure: false,
  oranization: {},
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loginRequest: true,
        loginSuccess: false,
        loginFailure: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
        loginRequest: false,
        organization: action.payload.organization,
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
