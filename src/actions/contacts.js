import action from './actionCreator';

export const GET_CONTACTS_REQUEST = 'CONTACTS/GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'CONTACTS/GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAILURE = 'CONTACTS/GET_CONTACTS_FAILURE';

export const getContactsRequest = action(GET_CONTACTS_REQUEST);
