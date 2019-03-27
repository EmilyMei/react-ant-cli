import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Layout } from 'antd';
import Header from '../../components/Header';
import './index.less';
class App extends React.Component {
  componentWillMount() {
  }
  componentWillReceiveProps() {
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <div className='content-main'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

App.contextTypes = {
};

const mapStateToProps = (state) => ({

});

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
