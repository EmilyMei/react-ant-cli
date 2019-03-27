import ReactDOM from 'react-dom';
import React from 'react';
import {
  hashHistory,
  Router,
  Route,
  IndexRedirect
} from 'react-router';
import App from '../views/App';

import Home from '../views/Home';
import TableMain from '../views/Table';
import ChartMain from '../views/ChartMain';
import FormMain from '../views/FormMain';
const Provider = require('react-redux').Provider;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} onEnter={validate}>
      <Route path='/' onEnter={validate}>
        {/* 正常情况默认首页 */}
        <IndexRedirect to='index' />
        <Route component={App}>
          {/* 首页 */}
          <Route path='index' component={Home} />
          <Route path='table' component={TableMain} />
          <Route path='chart' component={ChartMain}  />
          <Route path='form' component={FormMain}  />
        </Route>
      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
