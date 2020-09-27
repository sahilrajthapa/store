import action from './actionCreator';

export const GET_CONTACTS_REQUEST = 'CONTACTS/GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'CONTACTS/GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAILURE = 'CONTACTS/GET_CONTACTS_FAILURE';

export const POST_MESSAGE_REQUEST = 'CONTACTS/POST_MESSAGE_REQUEST';
export const POST_MESSAGE_SUCCESS = 'CONTACTS/POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILURE = 'CONTACTS/POST_MESSAGE_FAILURE';

export const TOGGLE_FORM = 'CONTACTS/TOGGLE_FORM';

export const UPDATE_FORM_FIELD = 'CONTACTS/UPDATE_FORM_FIELD';

export const getContactsRequest = action(GET_CONTACTS_REQUEST);

export const toggleForm = action(TOGGLE_FORM);

export const updateFormField = action(UPDATE_FORM_FIELD, 'payload');

export const postMessageRequest = action(POST_MESSAGE_REQUEST, 'payload');
