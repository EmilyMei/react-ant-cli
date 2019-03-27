// require('babel-register');

const webpack = require('webpack');
const config = require('./webpack.config');

const express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  configObject = require('./config'),
  jwt = require('jsonwebtoken'),
  app = express(),
  request = require('request'),
  path = require('path'),
  log4js = require('log4js'),
  utils = require('./utils'),
  ejs = require('ejs'),
  EventEmitter = require('events').EventEmitter;
const jsonParser = bodyParser.json();
const http = require('http');
const URL = require('url');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

log4js.configure({
  appenders: [
        {type: 'console'},
    {
      type: 'dateFile',
      filename: 'logs/normal.log',
      layout: {type: 'basic'},
      pattern: '.yyyy-MM-dd',
      alwaysIncludePattern: true,
      category: 'normal'
    }
  ],
  levels: {
    normal: configObject.logLevel
  }
});

const normalLog = log4js.getLogger('normal');

app.use(log4js.connectLogger(normalLog, {level: 'trace', format: ':method :url'}));

const env = process.env.NODE_ENV;

const isProduction = env === 'prod';

const isDeveloping = !isProduction;

// Webpack developer
if (!isDeveloping) {
    // const compiler = webpack(config);
    // app.use(require('webpack-dev-middleware')(compiler, {
    //     publicPath: config.output.publicPath,
    //     noInfo: true
    // }));
    //
    // app.use(require('webpack-hot-middleware')(compiler));
}


//设置静态文件目录
// const publicPath = path.resolve(__dirname, 'dist');

const publicPath = path.resolve(__dirname + '/dist');
// 加入gzip解析 .gz后缀文件
const expressStaticGzip = require('express-static-gzip');
app.use('/', expressStaticGzip(publicPath));
//静态资源的获取放后面
app.use(express.static(publicPath));

//设置可以接收cookie
app.use(cookieParser());

// oauth登录逻辑
app.get('/oauth', function(req, res) {

});

//声明事件
const event = new EventEmitter();

// 与ag交互发生错误
event.on('agError', function(res, errHtmlMessage, errLogMessage, body, response, err) {
  normalLog.error(errLogMessage + ',AG返回:' + body + ',response:' + response + ',error:' + err);
  res.json({code: '-1', message: '服务器发生异常，请稍后再试'});
  return;
});

app.post('/logout', function(req, res) {
  res.clearCookie('mytoken');
  res.clearCookie('rootTree');
  res.json({status: 1, message: '注销成功'});
});

function handlerResponse(error, response, body, reqBody, res) {
  try {
    if (!error && response.statusCode == 200) {
      normalLog.trace('访问AG【' + JSON.stringify(reqBody) + ',AG返回:' + body);
      res.json(JSON.parse(body));
      return;
    }
    normalLog.error('访问AG异常【' + JSON.stringify(reqBody) + '】AG返回:' + body + ',response:' + JSON.stringify(response) + ',error:' + error);
    res.json({code: '-1', message: '服务器发生异常,请稍后再试'});
    return;

  } catch (err) {
    normalLog.error('处理AG响应时发生异常:' + err);
    res.json({code: '-1', message: '服务器发生异常,请稍后再试'});
    return;
  }
}

//监听全局异常,防止程序崩溃
// app.use(function (err, req, res, next) {
//     normalLog.error("发生全局异常:" + err);
//     res.json({code: "-1", message: "服务器发生异常,请稍后再试"});
//     return;
// });

app.listen(configObject.port, function(err, result) {
  if (err) {
    normalLog.error('express全局异常:' + err);
  }
  console.log('Server running on port ' + configObject.port);
});
