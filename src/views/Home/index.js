import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon} from 'antd';
import { hashHistory} from 'react-router';
import './index.less';
import {
  getTabData
} from '../../actions/index';
class Home extends React.Component {
  state = {
  };
  /**
       * 加载页面之前
       * 获取数据内容
       * @return {[type]} [description]
       */
  componentWillMount() {
    this.props.getTabData();
  }
  componentWillReceiveProps(nextProps) {
    // 重新获取页面数据
  }
  links = (str) => {
    hashHistory.push(str);
  }
  render() {
    return (
      <div className='home'>
        <ul className='list'>
          {
            this.props.tabData.map((item, ind) => {
              return (
                <li className='list-item' key={ind} onClick={()=> {this.links(item.link)}}>
                  <Icon className='icons' type={item.icon} /> {item.title}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
//数据校验
Home.propTypes = {
  tabData: PropTypes.array.isRequired,
  getTabData: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    tabData: state.index.tabData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTabData: bindActionCreators(getTabData, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
