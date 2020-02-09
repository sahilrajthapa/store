import * as types from '../actions/profile';

const initialState = {
  getProfileRequest: false,
  getProfileSuccess: false,
  getProfileFailure: false,
  profile: {},
};

function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        getProfileRequest: true,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfileSuccess: true,
        getProfileRequest: false,
        profile: action.payload[0],
      };

    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfileFailure: true,
        getProfileRequest: false,
      };

    default: {
      return state;
    }
  }
}
export default profileReducer;
