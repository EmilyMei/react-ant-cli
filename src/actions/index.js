
import api from '../api';
import types from '../store/types';
import {
  get_tabs_data,
  get_chart_data
} from '../api/home';

export function getTabData() {
  return (dispatch) => {
    dispatch({
      type: types.GET_TABS_DATA,
      payload: {
        promise: get_tabs_data()
      }
    });
  };
}
export function getChartData() {
  return (dispatch) => {
    dispatch({
      type: types.GET_CHART_DATA,
      payload: {
        promise: get_chart_data()
      }
    });
  };
}

