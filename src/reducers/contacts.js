import * as types from '../actions/contacts';

const initialState = {
  contacts: [],
};

function contactsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
      };

    default: {
      return state;
    }
  }
}
export default contactsReducer;
