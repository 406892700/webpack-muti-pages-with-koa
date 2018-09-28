import React, { Component } from 'react'
import styles from '../index.scss'
import { wrapErrorBoundary } from '../util/wrapErrorBoundary'

/**
 * 普通组件
 */
class NormalComp extends Component {
  constructor() {
    super()

    this.state = {
      arr: [{ name: 'simple' }]
    }
  }

  handleClick = () => {
    this.setState({
      arr: []
    })
  }

  render() {
    const { arr } = this.state
    return (
      <div>
        <button onClick={this.handleClick}>踩雷</button>
        {
          arr[0].name
        }
      </div>
    )
  }
}

const NormalComponent = wrapErrorBoundary(NormalComp)

export default class extends Component{
  render () {
    return (
      <div>
        <React.StrictMode>
          <NormalComponent/>
        </React.StrictMode>
      </div>
        
    )
  }
}
