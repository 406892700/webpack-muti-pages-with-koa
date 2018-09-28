import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Button from '@xm/Button'
import {Modal, Notification} from '@xm/Dialog'

let i = 0

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: false
    }

    this.modalButtonClickHandler = this.modalButtonClickHandler.bind(this)
    this.firstModalConfirmHandler = this.firstModalConfirmHandler.bind(this)
    this.firstModalCancelHandler = this.firstModalCancelHandler.bind(this)
    this.showAnotherModalByFunction = this.showAnotherModalByFunction.bind(this)

    this.notificationButtonClickHandler = this.notificationButtonClickHandler.bind(this)
  }

  showAnotherModalByFunction () {
    const close = Modal.show({
      style: {
        top: '200px',
        width: '600px'
      },
      title: <div>另一个modal</div>,
      closable: true,
      maskClosable: true,
      globalScroll: true,
      content: <div style={{height: '1000px'}}>另一个Modal的内容</div>,
      footer: true,
      confirmText: '关闭第一个Modal',
      // cancelText: '关闭',
      onConfirm: () => {
        this.firstModalCancelHandler()
      },
      onCancel: () => {
        close()
      }
    })
  }

  modalButtonClickHandler () {
    this.setState({
      visible: true
    })
  }

  firstModalConfirmHandler () {
    this.showAnotherModalByFunction()
  }

  firstModalCancelHandler () {
    this.setState({
      visible: false
    })
  }

  notificationButtonClickHandler () {
    const n = Notification.show({
      title: `title${i++}`,
      body: `body${i++}`,
      duration: 3000,
      tag: Math.floor(Math.random() * 10),
      iconfont: `${styles.iconfont} ${styles['icon-close']}`,
      icon: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=489ae0bbdb09b3deebeab728aa825bb3/2cf5e0fe9925bc3142b4464b54df8db1ca137073.jpg',
      onClose: (data) => {
        console.log(data)
      },
      onClick: (data) => {
        console.log(data)
      }
    })
  }

  render () {
    const {visible} = this.state

    return (<div>
      <Button onClick={this.modalButtonClickHandler}>显示Modal</Button>
      <Button
        onClick={this.notificationButtonClickHandler}>显示Notification</Button>
      <Modal visible={visible} title="标题" footer closable maskClosable
             confirmText="打开一个新的Modal" onClose={this.firstModalCancelHandler}
             onConfirm={this.firstModalConfirmHandler}
             onCancel={this.firstModalCancelHandler}>
        <div>这是内容</div>
      </Modal>
    </div>)
  }
}

ReactDOM.render(<App />, document.body)