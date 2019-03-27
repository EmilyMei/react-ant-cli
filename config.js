const extend = require('node.extend');

let env = process.env.NODE_ENV; // development or test or production

if (!env) {//默认赋值
  env = 'dev';
}

if (env !== 'dev' && env !== 'test' && env !== 'prod') {//避免特殊情况
  env = 'dev';
}

const settings = {
  base: {
    appName: 'ShouLou',
    port: 4001,
    tokenExpiresIn: '1days',
    tokenIssuer: 'server',
    tokenAudience: 'client',
    tokenSubject: 'shoulou'
  },
  dev: {
    port: 4002,
    agUrl: 'http://112.74.143.61:8081/v1/',
    token: 'DTuuuvdWNqENxCd2Af57',
    appID: 'ICECAIUI-C9A1-4DBF-9972-B21DA0CFEFC4',
    agTimeout: 20000,
    logLevel: 'TRACE'
  },
  test: {
    port: 4001,
    agUrl: 'http://112.74.143.61:8081/v1/',
    token: 'DTuuuvdWNqENxCd2Af57',
    appID: 'ICECAIUI-C9A1-4DBF-9972-B21DA0CFEFC4',
    agTimeout: 20000,
    logLevel: 'INFO'
  },
  prod: {
    port: 80,
    agUrl: 'http://112.74.143.61:8081/v1/',
    token: 'DTuuuvdWNqENxCd2Af57',
    appID: 'ICECAIUI-C9A1-4DBF-9972-B21DA0CFEFC4',
    agTimeout: 10000,
    logLevel: 'INFO'
  }
};

const c = settings[env];
module.exports = extend(settings.base, c);
