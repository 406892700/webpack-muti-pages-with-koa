/**
 * 通过context来传递一些常用参数
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Parent extends Component {
  getChildContext() {
    return {
      ctx: '123'
    }
  }
  render () {
    return (
      <div>
        <Child/>
      </div>
    )
  }
}

Parent.childContextTypes = {
  ctx: PropTypes.string
};

class Child extends Component {
  render () {
    return (
      <div>
        <SubChild/>
      </div>
    )
  }
}

// Child.contextTypes = {
//   ctx: PropTypes.string
// }

class SubChild extends Component {
  constructor (props, context) {
    super();
    console.log(context);
  }

  render () {
    return (
      <div>
        123
      </div>
    )
  }
}

SubChild.contextTypes = {
  ctx: PropTypes.string
}

export default Parent;