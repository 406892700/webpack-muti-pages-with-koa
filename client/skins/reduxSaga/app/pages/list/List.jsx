import React, { Component } from 'react';
import { connect } from 'redux';

class List extends Component {
  render() {
    return (
      <div>{this.props.list}</div>
    );
  }
}

export default connect((state) => {
  return {
    name: state.list,
  };
})(List);
