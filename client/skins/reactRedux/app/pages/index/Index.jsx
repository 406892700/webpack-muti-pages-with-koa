import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setValue, change, getData } from '../../reducers/index/index'

console.log(setValue, change, getData);
class Index extends Component {
  constructor (props, context) {
    super();
  }

  state = {
    val: ''
  };

  render () {
    return (
      <div>
        {this.props.indexState.indexState}
        <button onClick={this.handleClick}>点击</button>

        <input type="text" value={this.state.val} onInput={(e) => {
          this.setState({
            val: e.target.value
          });
        }}/>
        <button onClick={this.handleClick2}>设置一个值</button>
        <p>
          { this.props.indexState.remoteData }
        </p>
      </div>
    );
  }

  handleClick = () => {
    // this.props.dispatch({
    //   type: 'CHANGE',
    // })
    this.props.change();
  }

  handleClick2 = () => {
    // console.log(this.props.getData);
    // console.log(this.context);
    // this.props.store.dispatch({
    //   type: 'SET_VALUE',
    //   value: this.state.val
    // })
    this.props.setValue(this.state.val);
    this.props.getData();
  }
}

export default connect((state) => {
  return {
    indexState: state.indexState
  };
},(dispatch) => {
  return {
    setValue: (value) => dispatch(setValue(value)),
    change: () => dispatch(change()),
    getData: () => dispatch(getData('simple', 26)),
  }
})(Index);