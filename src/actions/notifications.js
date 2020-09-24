import action from './actionCreator';

export const GET_NOTIFICATIONS_REQUEST =
  'NOTIFICATIONS/GET_NOTIFICATIONS_REQUEST';
export const GET_NOTIFICATIONS_SUCCESS =
  'NOTIFICATIONS/GET_NOTIFICATIONS_SUCCESS';
export const GET_NOTIFICATIONS_FAILURE =
  'NOTIFICATIONS/GET_NOTIFICATIONS_FAILURE';

export const GET_INFORMATION_REQUEST = 'NOTIFICATIONS/GET_INFORMATION_REQUEST';
export const GET_INFORMATION_SUCCESS = 'NOTIFICATIONS/GET_INFORMATION_SUCCESS';
export const GET_INFORMATION_FAILURE = 'NOTIFICATIONS/GET_INFORMATION_FAILURE';

export const POST_NOTIFICATION_MESSAGE_REQUEST =
  'NOTIFICATONS/POST_NOTIFICATION_MESSAGE_REQUEST';
export const POST_NOTIFICATION_MESSAGE_SUCCESS =
  'NOTIFICATONS/POST_NOTIFICATION_MESSAGE_SUCCESS';
export const POST_NOTIFICATION_MESSAGE_FAILURE =
  'NOTIFICATONS/POST_NOTIFICATION_MESSAGE_FAILURE';

export const TOGGLE_FORM = 'NOTIFICATIONS/TOGGLE_FORM';

export const UPDATE_FORM_FIELD = 'NOTIFICATIONS/UPDATE_FORM_FIELD';

export const getInformationRequest = action(GET_INFORMATION_REQUEST, 'params');

export const getNotificationsRequest = action(
  GET_NOTIFICATIONS_REQUEST,
  'params',
);

export const postNotificationMessageRequest = action(
  POST_NOTIFICATION_MESSAGE_REQUEST,
  'payload',
);

export const toggleForm = action(TOGGLE_FORM);

export const updateFormField = action(UPDATE_FORM_FIELD, 'payload');
