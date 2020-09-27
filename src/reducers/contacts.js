import * as types from '../actions/contacts';

const initialState = {
  contacts: [],
  form: {
    show: false,
    message: '',
    photo: null,
  },
};

function contactsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
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

    default: {
      return state;
    }
  }
}
export default contactsReducer;
