import types from '../types';
import { message } from 'antd';
import { delAllCookie } from '../../util';
import {
  browserHistory
} from 'react-router';

export default (store) => (next) => (action) => {
  // 错误提示信息
  if (action.payload && action.payload.code) {
    const code = action.payload.code + '';
    if (code != '0') {
      if(code == 1001){//登录失效，需重新登录
        delAllCookie();
        window.location.href = '/#/login';
        return;
      }
      const msgArray = [];
      for(const errCode in action.payload.msg){//遍历对象属性名
        if(action.payload.msg[errCode]){
          msgArray.push(action.payload.msg[errCode]);
        }
      }
      // let msg = '操作失败';
      if(msgArray.length>0){
        msg = msgArray.join('，');
      }
      next(action);
      // message.error(msg);
      return;
    }
  }

  next(action);
};
