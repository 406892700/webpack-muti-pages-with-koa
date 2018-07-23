import React, { Component } from 'react';
import { connect } from 'react-redux';
class Index extends Component {
  state = {
    val: ''
  };
  render () {
    return (
      <div>
        index {this.props.indexState}
        <button onClick={this.handleClick}>点击</button>

        <input type="text" value={this.state.val} onInput={(e) => {
          this.setState({
            val: e.target.value
          });
        }}/>
        <button onClick={this.handleClick2}>设置一个值</button>
      </div>
    );
  }

  handleClick = () => {
    this.props.dispatch({
      type: 'CHANGE',
    })
  }

  handleClick2 = () => {
    this.props.dispatch({
      type: 'SET_VALUE',
      value: this.state.val
    })
  }
}

export default connect((state) => state.indexState)(Index);