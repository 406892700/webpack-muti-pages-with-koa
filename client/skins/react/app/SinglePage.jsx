import React, { Component } from 'react';
import './singlePage.scss';
import { resolve } from 'url';

console.log(Component);

// const console = {
//   log: (str) => {
//     window.console.log(str+'\n--------------------------\n↓↓↓↓↓↓↓↓↓↓↓↓');
//   }
// }

// const console1 = {
//   log: (str) => {
//     window.console.log(str);
//   }
// }

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    console.log(error, info);
  }

  render() {
    // debugger;
    if(this.state.error) {
      return (<p>错误</p>)
    }
    return (this.props.children);
  }
}

class Parent extends Component {
  constructor () {
      super();
      this.state = {
        key: 'parent',
        msg: 'from parent',
        h: 1
      }
  }

  componentWillMount () {
    console.log('parent componentWillMount');
  }

  render () {
    console.log('parent render');
    return (
      // <React.Fragment>
      //   {/* <a href="">{this.state.msg}</a>
      //   {[
      //     <div key="1">ddd</div>,
      //     <div key="1">2ddd</div>
      //   ]} */}
      // </React.Fragment>
      <div>
        <button onClick={this.handleClick}>更改</button>
        <ErrorBoundary>
          <Child h={this.state.h}></Child>
        </ErrorBoundary>
      </div>
      
    );
  }

  componentDidMount () {
    console.log(this.__proto__.componentDidMount);
    console.log('parent componentDidMount');
    this.setState({
      msg: 123
    })
  }

  shouldComponentUpdate() {
    console.log('parent shouldComponentUpdate');
    return true;
  }

  handleClick = () => {
    // setTimeout(() => {
    //   console1.log(4);
    //   this.setState({
    //     msg: '4'
    //   });
    // });

    // new Promise((resolve, reject) => {
    //   console1.log(2);
    //   this.setState({
    //     msg: '2'
    //   });
    //   resolve()
    // }).then((e) => {
    //   this.setState({
    //     msg: '5'
    //   });
    //   console1.log(5)
    // });
    // this.setState({
    //   msg: '1'
    // });
    // console1.log(1)
    // this.setState({
    //   msg: 1
    // });
    // this.setState({
    //   msg: 2
    // });

    // new Promise((resolve, reject) => {
    //   resolve();
    // }).then(() => {
    //   this.setState({
    //     msg: 1
    //   });
    //   this.setState({
    //     msg: 2
    //   });
    // });
    this.setState({
      h: Math.ceil(Math.random()*6)
    })
  }

  componentWillUpdate () {
    console.log('parent componentWillUpdate');
  }

  componentDidUpdate () {
    console.log('parent componentDidUpdate');

  }

  componentWillUnmount () {
    console.log('parent componentWillUnmount');
  }
}

class Child extends Component {
  constructor() {
    super();
    this.state = {
      msg: ''
    }
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps, this.props);
    this.setState({
      msg: '1234'
    })
  }

  componentWillMount () {
    let a = {};
    // console.log(a.b.c);
    console.log('child componentWillMount');
  }

  render () { 
    console.log('child render------');
    // const b = this.state.c;
    // console.log('child render');
    // return (<div className="child">{this.props.msg}</div>)
    // return React.createElement(`h${this.props.h}`, {className : `h${this.props.h}`}, '哈哈哈', React.createElement(Child, null, '1234'));
    // return (
    //   <div>
    //   { 
    //     this.props.messages && <MessageList messages={props.messages} />
    //   }
    //   </div>
    // )

    return (
      <div>
        {this.state.msg}
        <SubChild/>
      </div>
    )
  }

  componentDidMount () {
    console.log('child componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('child shouldComponentUpdate');
    return true;
  }

  componentWillUpdate () {
    console.log('child componentWillUpdate');
  }

  componentDidUpdate () {
    console.log('child componentDidUpdate');
  }

  componentWillUnmount () {
    console.log('child componentWillUnmount');
  }
}


class SubChild extends Component {
  render() {
    // console.log(this.state.name);
    return (<p>1234</p>)
  }
}

export default Parent;