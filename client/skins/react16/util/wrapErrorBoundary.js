import React, { Component } from 'react'

export const wrapErrorBoundary = (Compt) => {
  return (props) => (
    <ErrorBoundraies>
      <Compt {...props}/>
    </ErrorBoundraies>
    )
}

/**
 * 错误边界
 */
export class ErrorBoundraies extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(err, info) {
    this.setState({
      hasError: true
    })

    // 发送崩溃日志
    console.log(err, info)
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div style={{color: '#fff', backgroundColor: '#d00000'}}>
          血崩...
        </div>
      )
    }
    return this.props.children;
  }
}