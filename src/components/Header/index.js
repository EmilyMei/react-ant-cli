import React from 'react';
import './index.less';
import logo from '../../static/images/logo.png';
import { hashHistory} from 'react-router';
export default class Headers extends React.Component {
  render() {
    return (
      <div className='header' onClick={() => {
        hashHistory.push('/');
      }}>
        <img className='logos' src={logo}/>
        <h1>Welcome to Your React</h1>
      </div>
    );
  }
}
