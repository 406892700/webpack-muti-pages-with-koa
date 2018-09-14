import React, { Component } from 'react';
import { connect } from 'react-redux';

class Index extends Component {
  render() {
    const { rootInfo: { loginUser } } = this.props;
    return (
      <div>
        {loginUser.realname} | { loginUser.mobile }
      </div>
    );
  }
}

export default connect((state) => {
  return {
    rootInfo: state.rootInfo,
  };
})(Index);
