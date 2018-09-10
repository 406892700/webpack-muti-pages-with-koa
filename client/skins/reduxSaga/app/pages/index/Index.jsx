import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList } from '../../reducers/index/index';

class Index extends Component {
  handleClick = () => {
    this.props.dispatch(getUserList(1));
  }
  render() {
    const { indexState } = this.props;
    return (
      <div>
        {
          indexState.isFetching ? 
            'loading...'
            : (
              <ul>
                {
                  indexState.list.map((it, index) => (
                    <li key={index}>{it.name} | {it.age}</li>
                  ))
                }
              </ul>
            )
        }
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
