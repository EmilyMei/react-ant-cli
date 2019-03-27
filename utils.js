const md5 = require('md5');

function getAgOauth(appID, token){
  const ts =new Date().getTime().toString().substring(0, 10);
  return '?sign='+md5(appID+ts+token+'false')+'&ts='+ts+'&appID='+appID ;
}

const utils = {};
utils.getAgOauth = getAgOauth;

module.exports = utils;
