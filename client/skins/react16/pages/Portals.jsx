import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from '../index.scss'

class Tips extends Component {
  constructor() {
    super()
    this.dom = null
  }
  componentWillMount() {
    this.dom = document.createElement('div')
    this.dom.id = `portal-${Date.now()}`
    document.body.appendChild(this.dom);
  }

  componentWillUnmount() {
    document.body.removeChild(this.dom);
  }

  render() {
    return ReactDOM.createPortal(
      <div className={styles.portalTips}>
        显示弹窗

        <button onClick={this.props.onClose}>关闭</button>
      </div>,
      this.dom
    )
  }
}

class NormalTips extends Component {
  render () {
    return (
      <div className={styles.portalTips}>
        显示弹窗

        <button onClick={this.props.onClose}>关闭</button>
      </div>
    )
  }
}

class DiyPortalTips extends Component {
  constructor() {
    super()
    this.dom = null
  }

  componentWillMount() {
    this.dom = document.createElement('div')
    this.dom.id = `diy-portal-${Date.now()}`

    document.body.appendChild(this.dom)
  }

  componentDidMount() {
    this.renderToPortal()
  }

  renderToPortal = () => {
    ReactDOM.render(
      <div className={styles.portalTips}>
        显示弹窗

        <button onClick={this.props.onClose}>关闭</button>
      </div>,
      this.dom
    )
  }

  render() {
    return null
  }

  componentWillUnmount() {
    document.body.removeChild(this.dom)
  }
}

export default class Portals extends Component {
  constructor() {
    super()
    this.state = {
      showTips: false,
      showNormalTips: false,
      showDiyTips: false,
    }
  }
  onClose = () => {
    this.setState({
      showTips: false
    })
  }

  onNormalClose = () => {
    this.setState({
      showNormalTips: false
    })
  }

  onDiyClose = () => {
    this.setState({
      showDiyTips: false
    })
  }

  render() {
    return (
      <div style={{overflow: 'hidden', color: '#0078d8', fontSize: '40px'}} onClick={(e) => {
        e.target.tagName.toLowerCase() =='button' && !e.target.getAttribute('data-trigger') && alert('我的儿被关闭啦~')
      }}>
        <p>两种方式对比</p>
        <button onClick={() => this.setState({ showTips: true })} data-trigger={true}>出现portal弹窗</button>
        <button onClick={() => this.setState({ showNormalTips: true })} data-trigger={true}>出现普通弹窗</button>
        <button onClick={() => this.setState({ showDiyTips: true })} data-trigger={true}>出现diy portal弹窗</button>
        {
          this.state.showTips && <Tips onClose={this.onClose}/>
        }

        {
          this.state.showNormalTips && <NormalTips onClose={this.onNormalClose}/>
        }

        {
          this.state.showDiyTips && <DiyPortalTips onClose={this.onDiyClose}/>
        }
      </div>
    )
  }
}