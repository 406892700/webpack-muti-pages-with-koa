import React, { Component } from 'react'
import { render } from 'react-dom'
import Router from './Router'

class ErrorBoundary extends Component {
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

    this.error = err
    this.info = info

    // console.log(err, info)
  }

  render() {
    const { hasError } = this.state
    if (hasError) {
      return (
        <div>
          <div style={{color: '#d00000'}}>他妈的血崩</div>
        </div>
      )
    }

    return this.props.children
  }
}

render(
  <ErrorBoundary>
    <Router/>
  </ErrorBoundary>,
  document.getElementById('app')
)