import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setValue, change, getData } from '../../reducers/index/index';

class Index extends Component {
  render() {
    const { userInfo: { realname, mobile } } = this.props;
    return (
      <div>
        <p>{realname} | {mobile}</p>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    userInfo: state.userInfo.loginUser,
  };
}, (dispatch) => {
  return {
    actions: {
      getSongList: () => dispatch(),
    },
  };
})(Index);
