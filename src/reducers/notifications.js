import * as types from '../actions/notifications';

const initialState = {
  loader: false,
  sliderInformation: [],
  information: [],
  notifications: [],
  form: {
    show: false,
    message: '',
    photo: null,
  },
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

    case types.TOGGLE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          show: !state.form.show,
        },
      };

    case types.UPDATE_FORM_FIELD: {
      const {
        payload: {name, value},
      } = action;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    }

    case types.RESET_FORM:
      return {
        ...state,
        form: {
          show: false,
          message: '',
          photo: null,
        },
      };

    default:
      return state;
  }
}
export default notificationsReducer;
