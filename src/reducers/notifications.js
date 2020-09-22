import * as types from '../actions/notifications';

const initialState = {
  loader: false,
  sliderInformation: [],
  information: [],
  notifications: [],
};

function getInformationSuccess(state, action) {
  const {
    payload: {data, sliderInformation},
  } = action;

  if (sliderInformation) {
    return {
      ...state,
      sliderInformation: data,
    };
  }
  return {
    ...state,
    information: data,
  };
}

function notificationsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_INFORMATION_REQUEST:
      return {
        ...state,
        loader: true,
      };

    case types.GET_INFORMATION_SUCCESS:
      return getInformationSuccess(state, action);

    case types.GET_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        loader: true,
      };

    case types.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.payload,
      };

    default: {
      return state;
    }
  }
}
export default notificationsReducer;
