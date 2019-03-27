import Api from './api';
import {getCookie, getServerBase} from '../util';
// function headers(){
//   if (typeof getCookie('token') === 'undefined'){
//     return {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//       // 'Authorization': getCookie('token')
//     };
//   }
//   return {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': getCookie('token')
//   };
// }
let api = new Api({
  baseURI: getServerBase(),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
export default api;
/**
* ajax获取数据
* type 请求类型 （get,post,put...)
* path 请求路径
* 请求参数 object
*/
export function AjaxServer(type, path, params, data) {
  refresh_api(getCookie('token'));
  if (!getCookie('token') || typeof getCookie('token') ==='undefined'  || getCookie('token') === '' ){
    location.href = '/#/login';
  }
  // params.token = getCookie('token');
  return api[type](path, { params, data: data});
}
/**
 * 刷新api对象，获取cookie
 */
export function refresh_api(token){
  api = new Api({
    baseURI: getServerBase(),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
}
/**
 * 下载文件
 * @param {*} type
 * @param {*} path
 * @param {*} params
 * @param {*} data
 */
export function Download(type, path, params){
  let str = '';
  for(const i in params){
    if(typeof params[i] !== 'undefined'){
      str+=i+'='+params[i]+'&';
    }
  }
  window.open(getServerBase()+path+'?'+str);
}
