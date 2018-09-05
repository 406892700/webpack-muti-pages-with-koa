import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNamebyIndex } from '../../reducers/index/index';

class Index extends Component {
  handleClick = () => {
    this.props.dispatch(getNamebyIndex(2));
  }
  render() {
    return (
      <div>
        <h2>
          {
            !this.props.indexState ? 1 : this.props.indexState.user
          }
        </h2>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    indexState: state.index,
  };
})(Index);
