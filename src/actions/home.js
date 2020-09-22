import action from './actionCreator';

export const GET_DASHBOARD_DATA_REQUEST =
  'DASHBOARD/GET_DASHBOARD_DATA_REQUEST';
export const GET_DASHBOARD_DATA_SUCCESS =
  'DASHBOARD/GET_DASHBOARD_DATA_SUCCESS';
export const GET_DASHBOARD_DATA_FAILURE =
  'DASHBOARD/GET_DASHBOARD_DATA_FAILURE';

export const getDashboardDataRequest = action(GET_DASHBOARD_DATA_REQUEST);
