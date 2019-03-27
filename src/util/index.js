import {
  IMAGE_HOST_TEST,
  IMAGE_HOST_PROD
} from '../constants';
import _ from 'lodash';
import CryptoJS from 'crypto-js';
import {
  salt
} from './configs.js';

export const noop = function noop() {};

export function createReducer(initialparams, reducerMap) {
  return (params = initialparams, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(params, action.payload ? action.payload : {}, action.params) : params;
  };
}

export function clone(Obj){
  let buf, undefinedValue;
  if (Obj !== null && Obj !== undefinedValue && (!!Obj.asImmutable || typeof Obj._isValid !== 'undefined')){
    //Immutable
    return Obj;
  }
  if (Obj instanceof Array) {
    buf = [];  // 创建一个空的数组
    let i = Obj.length;
    while (i--) {
      buf[i] = clone(Obj[i]);
    }
    return buf;
  } else if (Obj instanceof Object){
    buf = {};  // 创建一个空对象
    for (const k in Obj) {  // 为这个对象添加新的属性
      buf[k] = clone(Obj[k]);
    }
    return buf;
  }
  return Obj;

}

/**
 * fixNumber(date)
 *
 * desc：
 * 修复时间字符串，判断时间长度是否满足要求，不满足则根据长度差距在其末尾不足 '0'
 *
 * 参数：
 * `date` 时间 String
 *
 * 默认 `dataLength` = 13
 */
export function fixNumber(date) {
  const dateLength = 13;
  const len = date.length;

  let diffLen = dateLength - len;
  let diff = '';

  while (diffLen) {
    diff += '0';
    diffLen--;
  }

  return date + diff;
}

/**
 * dateFormat(data, format)
 *
 * desc：
 * 时间格式化，默认为 `yyyy-MM-dd` 类型
 *
 * 懵逼了，需要啃下 `es6` 语法。。。
 *
 * */
export function dateFormat(date, format) {
  let _format = format || 'yyyy-MM-dd';

  const d = date;
  const o = {
    'M+': d.getMonth() + 1, // month
    'd+': d.getDate(), // day
    'h+': d.getHours(), // hour
    'm+': d.getMinutes(), // minute
    's+': d.getSeconds(), // second
    'q+': Math.floor((d.getMonth() + 3) / 3), // quarter
    'S': d.getMilliseconds() // millisecond
  };

  /**
     * `repeat` 方法返回一个新字符串，表示将原字符串重复 `n` 次。
     *
     * `RegExp` 是javascript中的一个内置对象。为正则表达式。
     * `RegExp.$1` 是 `RegExp` 的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
     * 以此类推，RegExp.$2，RegExp.$3，..RegExp.$99总共可以有99个匹配
     *
     * 例子：
     * var r= /^(\d{4})-(\d{1,2})-(\d{1,2})$/; //正则表达式 匹配出生日期(简单匹配)
     * r.exec('1985-10-15');
     * s1=RegExp.$1;
     * s2=RegExp.$2;
     * s3=RegExp.$3;
     * alert(s1+" "+s2+" "+s3)//结果为1985 10 15
     *
     * `test()` 方法用于检测一个字符串是否匹配某个模式.
     * 语法：RegExpObject.test(string)
     *
     */

  /**
     * 使用正则匹配年份：
     *
     * 1、 /(y+)/.test(_format)
     * - 检测： `_format` 中最少有一个 `y` // 正则： `+` 表示最少要有一个； `*` 表示 `0-N` ge; `?` 表示 `0/1` 个
     *
     * 2、 (d.getFullYear() + '').substr(4 - RegExp.$1.length))
     * - 判断正则匹配的字符串长度，截取年份字符串，正则匹配长度为 `1~3`、`5~7` 匹配结果为 `1~3` 位的年份字符串， `4,8,...` 为整个年份字符串
     *
     * 3、 _format = _format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
     * - 替换所有 `y` 为上面匹配出的年份字符串的结果
     *
     */

  if (/(y+)/.test(_format)) {
    _format = _format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (const k in o) {
    if (o.hasOwnProperty(k) && new RegExp('(' + k + ')').test(_format)) {
      _format = _format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }

  return _format;
}

/**
 * imgTrustUrl(url)
 * 在 `node` 服务上使用，判断 `开发环境/测试环境` 补全 `Url`，在前面加入服务器 `Url`
 *
 * 后续研究下如何扩展 `Java` 配置
 *
 */
export function imgTrustUrl(url) {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    return IMAGE_HOST_TEST + url;
  } else if (process.env.NODE_ENV === 'production') {
    return IMAGE_HOST_PROD + url;
  }
  return url;

}

export function isPromise(value) {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function';
  }
}

export function setCookie(cname, cvalue, exhours) {
  const date = new Date();
  date.setTime(date.getTime() + (exhours*60*60*1000));
  const expires = 'expires='+date.toUTCString();
  document.cookie = cname + '=' + escape(cvalue) + '; ' + expires;
}
export function getCookie(name) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2) {return unescape(parts.pop().split(';').shift());}
}
export function delCookie($name){
  const myDate=new Date();
  myDate.setTime(-1000);//设置时间
  document.cookie=$name+'=\'\'; expires='+myDate.toGMTString();
}
export function delAllCookie(){
  const myDate=new Date();
  myDate.setTime(-1000);//设置时间
  const data=document.cookie;
  const dataArray=data.split('; ');
  for(let i=0;i<dataArray.length;i++){
    const varName=dataArray[i].split('=');
    document.cookie=varName[0]+'=\'\'; expires='+myDate.toGMTString();
  }

}

export function addFieldsToObject(object, fields) {
  if (fields && typeof(fields) === 'object') {
    _.mapKeys(fields, function(value, key) {
      const componentValue = value.value;
      object[key] = componentValue;
    });
  }
  return object;
}
export function objectTransformField(fields, object) {

  if (object && typeof(object) === 'object') {
    _.mapKeys(object, function(value, key) {
      fields[key] = {
        name: key,
        value: value
      };
    });
  }

  return fields;
}

export const setArraytoObj = (function f(params, str, num, callback) {

  if (num === 0) {
    return params;
  }

  const temp = Object.assign({}, params);

  temp[str + num] = callback(temp, str, num);

  return f(temp, str, num - 1, callback);
});

export function getServerBase(){
  switch (process.env.NODE_ENV) {
    case 'dev': return 'http://10.107.20.17:8087';//开发接口请求地址
    case 'test': return 'https://iot-home-test.crlandpm.com.cn';
    case 'staging': return 'https://precustomerservicebackend.crlandpm.com.cn';
    case 'prod': return 'https://iot.crlandpm.com.cn:6443';//生产环境请求地址
    default: return 'http://localhost/api/';
  }
}
/**
 * 获取展开的节点id
 * @param {*} keys
 * @param {*} datas
 */
export function getOpenKey(keys, datas) {
  const openKeys = [];
  datas.forEach((element) => {
    if (keys.indexOf(element.key) >= 0) {
      openKeys.push(element.key);
    }
    if (element.children && element.children.length > 0) {
      element.children.forEach((item) => {
        if (keys.indexOf(item.key) >= 0) {
          openKeys.push(element.key);
        }
      });
    }
  });
  return openKeys;
}
/**
 * 生成二维码
 */
export function createCode() {
  //首先默认code为空字符串
  const code = [];
  //设置长度，这里看需求，我这里设置了4
  const codeLength = 4;
  //设置随机字符
  const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  //循环codeLength 我设置的4就是循环4次
  for (let i = 0; i < codeLength; i++) {
    //设置随机数范围,这设置为0 ~ 36
    const index = Math.floor(Math.random() * 36);
    //字符串拼接 将每次随机的字符 进行拼接
    code.push(random[index]);
  }
  //将拼接好的字符串赋值给展示的Value
  return code;
}

/**
  * 获取设备名称
  */
export function getTypeName(id, arr) {
  let res = '';
  arr.forEach((element) => {
    if (element.id ? element.id + '' === id + '' : element.key + '' === id + '') {
      res = element.title;
    }
  });
  return res;
}

export function changeKeyNames(obj, namesMap, cb) {
  let res = _.transform(obj, function(result, value, key) {
    if(namesMap[key]){
      result[namesMap[key]] = value;
    }
    else{
      result[key] = value;
    }
    res = result;
  });
  cb(res);
}
/**
 * 获取md5加密文件
 */
export function getMd5(str){
  return CryptoJS.MD5(salt + '' + str).toString().toUpperCase();
}
/**
 * 获取当前日往前一个月的日期
 */
export function getLastMonthYestdy(){
  let datastr = '';
  const date = new Date();
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let strYear = date.getFullYear();
  let strDay = date.getDate();
  let strMonth = date.getMonth()+1;
  if(strYear%4 === 0 && strYear %100 !== 0){
    daysInMonth[2] = 29;
  }
  if(strMonth - 1 === 0){
    strYear -= 1;
    strMonth = 12;
  } else {
    strMonth -= 1;
  }
  strDay = Math.min(strDay, daysInMonth[strMonth]);
  if(strMonth < 10){
    strMonth = '0'+ strMonth;
  }
  if(strDay < 10){
    strDay = '0' + strDay;
  }
  datastr = strYear + '-' + strMonth + '-' + strDay;
  return datastr;
}
