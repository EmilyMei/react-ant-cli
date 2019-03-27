import { createReducer, clone } from '../util';
import types from '../store/types';

const InitState = {
  tabData: [],
  chartData: []
};

export default createReducer(InitState, {
  [`${types.GET_TABS_DATA}_SUCCESS`]: (state, data) => {
    const stateClone = clone(state);
    console.log(data.data);
    if(data.status === 1){
      stateClone.tabData = data.data;
    }
    return stateClone;
  },
  [`${types.GET_CHART_DATA}_SUCCESS`]: (state, data) => {
    const stateClone = clone(state);
    if(data.status === 1){
      stateClone.chartData = data.data;
    }
    return stateClone;
  },
  [`${types.GET_MONTH_ALARM_DATA}_SUCCESS`]: (state, data) => {
    const stateClone = clone(state);
    if(data.status === 1){
      stateClone.monthAlarmData.data = data.data;
    }
    return stateClone;
  },
  [`${types.GET_THREE_ALARM_DATA}_SUCCESS`]: (state, data) => {
    const stateClone = clone(state);
    if(data.status === 1){
      stateClone.dayAlarmData.data = data.data;
    }
    return stateClone;
  },
  [`${types.GET_ALARM_DATA}_SUCCESS`]: (state, data) => {
    const stateClone = clone(state);
    if(data.status === 1){
      stateClone.alarmData = data.data.data;
      stateClone.alarmChartData.data = data.data.data;
      stateClone.alarmChartData.total = data.data.total;
    }
    return stateClone;
  },
  [`${types.GET_RIRE_DEVICE_DATA}_SUCCESS`]: (state, data) => {
    const stateClone = clone(state);
    if(data.status === 1){
      stateClone.fireDeviceData.data = data.data;
    }
    return stateClone;
  },
  [`${types.GET_GATEWAY_DATA}_SUCCESS`]: (state, data) => {
    const stateClone = clone(state);
    if(data.status === 1){
      stateClone.gatewayData = data.data;
    }
    return stateClone;
  },
  [`${types.GET_ALARM_INFO_DATA}_SUCCESS`]: (state, data) => {
    const stateClone = clone(state);
    if(data.status === 1){
      stateClone.alarmInfoData = data.data;
    }
    return stateClone;
  }
});
