/**
 * 通过context来传递一些常用参数
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.scss';
import data from './data';
import ApproveTplPrint from '@xm/ApproveTplPrint';
import DropDown from '@xm/Dropdown';
import Alert from '@xm/Alert';
import Avatar from '@xm/Avatar';
import Badge from '@xm/Badge';
import Button from '@xm/Button';
import Checkbox from '@xm/Checkbox';
import { Modal } from '@xm/Dialog';
import Example from '@xm/Example';
import FileList from '@xm/FileList';
import ImageList from '@xm/ImageList';
import Input from '@xm/Input';
import MutiDropDown from '@xm/MultiDropdown';
import Pagination from '@xm/Pagination';
import Radio from '@xm/Radio';
import Switch from '@xm/Switch';
import Table from '@xm/Table';
import Textarea from '@xm/TextArea';
import Toast from '@xm/Toast';
import Uploader from '@xm/Uploader';
import Comment from '@xm/web-comment';
import WebFrame from '@xm/webFrame';


const OPTIONS = [
  {text: '选项1', value: 1, selected: true},
  {text: '选项2', value: 2},
  {text: '选项3', value: 3}
]

function onChange (data) {
  console.log(data)
}

const onClose = () => {
  console.log('closed')
}

const style = {
  display: 'block',
  marginTop: '10px'
}

const DATA = [
  {
    name: 'very long long long long long long long long long long long long long long long long file name with jpg ext.jpg',
    size: 100000,
    icon: 'https://filesystem.api.jituancaiyun.com/sfs/avatar?uid=106096&isThumb=1&_=1505266816141',
    downloadUrl: 'http://filesystem.api.jituancaiyun.com/sfs/file?digest=2ca7fe608b2c11775245dd71887a8e59&token=daa1df7855acd5f79d6a363e79197430&ts=1505266815875073&uid=10101001191214848&image.png'
  },
  {
    name: '中文名字.pdf',
    size: 88888888,
    downloadUrl: 'http://filesystem.api.jituancaiyun.com/sfs/file?digest=2ca7fe608b2c11775245dd71887a8e59&token=daa1df7855acd5f79d6a363e79197430&ts=1505266815875073&uid=10101001191214848&image.png'
  },
  {
    name: '文件夹',
    size: 11111111111111111,
    downloadUrl: 'http://filesystem.api.jituancaiyun.com/sfs/file?digest=2ca7fe608b2c11775245dd71887a8e59&token=daa1df7855acd5f79d6a363e79197430&ts=1505266815875073&uid=10101001191214848&image.png'
  },
  {
    name: '特殊定制关闭按钮回调',
    size: 111,
    onDelete: p => console.log('custom delete', p),
    downloadUrl: ''
  }
]

const IMG_DATA =  [
  {
    src: 'https://filesystem.api.jituancaiyun.com/sfs/file?digest=c2bb15b169752f93126167d26e570a31',
    title: 'xxx'
  },
  {
    src: 'https://filesystem.api.jituancaiyun.com/sfs/file?digest=b2e71fd36d1e32776a744416e453c988',
    title: '哈哈哈哈'
  },
  {
    src: 'https://filesystem.api.jituancaiyun.com/sfs/file?digest=c2bb15b169752f93126167d26e570a31',
    title: '吼吼吼'
  },
  {
    src: 'https://filesystem.api.jituancaiyun.com/sfs/file?digest=b2e71fd36d1e32776a744416e453c988',
    title: '惺惺惜惺惺想寻寻寻寻'
  },
  {
    src: 'https://filesystem.api.jituancaiyun.com/sfs/file?digest=c2bb15b169752f93126167d26e570a31',
    title: 'xxxxxxxxxxxx'
  },
  {
    src: 'https://filesystem.api.jituancaiyun.com/sfs/file?digest=b2e71fd36d1e32776a744416e453c988',
    title: '11111'
  },
  {
    src: 'https://filesystem.api.jituancaiyun.com/sfs/file?digest=c2bb15b169752f93126167d26e570a31',
    title: 'xx11x'
  },
  {
    src: 'https://filesystem.api.jituancaiyun.com/sfs/file?digest=b2e71fd36d1e32776a744416e453c988',
    title: 'y啊啊yy'
  }
]

const MULT_OPTIONS = [
  {text: '选项1', value: 1},
  {text: '选项2', value: 2},
  {text: '选项3', value: 3},
  {text: '选项4', value: 4},
  {text: '选项5', value: 5},
  {text: '选项6', value: 6},
  {text: '选项7', value: 7}
]

class Test extends Component {
  constructor() {
    super();
    this.index = 0
    this.directions = ['top', 'right', 'bottom', 'left']
    this.state = {
      count: 1,
      dot: true,
      visible: false,
      value: '',
      selected: [
        {text: '选项1', value: 1},
        {text: '选项6', value: 6},
        {text: '选项7', value: 7}
      ],
      visibleComment: false,
      visibleWebFrame: false,
      index: -1,
      renderWebFrame: true,
      direction: this.directions[this.index],
      urls: [
        {
          title: '百度',
          url: 'http://m.baidu.com'
        },
        {
          title: '天猫',
          url: 'http://m.tmall.com'
        },
        {
          title: '淘宝',
          url: 'http://m.taobao.com'
        }]
    }
  }
  handleClick = () => {
    const info = data.data
    console.log(info)
    ApproveTplPrint.downFile({...info,...{orgName:'测试企业名称'}})
  }
  increase = () => {
    const count = this.state.count + 1

    this.setState({count})
  }

  decline = () => {
    const count = this.state.count - 1

    this.setState({count})
  }

  toggleDot = () => {
    const dot = !this.state.dot

    this.setState({dot})
  }

  change  = () => {
    const {urls} = this.state
    let {index} = this.state
    const len = urls.length

    index = index + 1 >= len ? 0 : index + 1

    this.setState({
      visibleWebFrame: true,
      index
    })
  }

  show = () => {
    this.setState({
      visibleWebFrame: true,
      renderWebFrame: true
    })
  }

  hide = () => {
    this.setState({
      visibleWebFrame: false
    })
  }

  unmount = () => {
    this.setState({
      renderWebFrame: false
    })
  }

  switchDirection = () => {
    if (this.index + 1 === this.directions.length) {
      this.index = 0
    } else {
      this.index += 1
    }

    this.setState({
      direction: this.directions[this.index]
    })
  }

  render () {
    const { count, dot, visible, visibleComment, visibleWebFrame, urls, index, renderWebFrame, direction } = this.state
    const width = (this.index === 1 || this.index === 3) ? '400px' : '100%'
    const height = (this.index === 1 || this.index === 3) ? '100%' : '400px'
    return (
      <div>
        <div className={styles.item}>
          <h2>ApproveTplPrint</h2>
          <button onClick={this.handleClick}>下载测试</button>
        </div>

        <div className={styles.item}>
          <h2>DropDown</h2>
          <DropDown onChange={onChange} excludeSelected title="developer" options={OPTIONS} />
        </div>

        <div className={styles.item}>
          <h2>Alert</h2>
          <Alert message="默认提示" />
        </div>

        <div className={styles.item}>
          <h2>Avatar</h2>
          <div>
            能加载到头像
            <Avatar uid={1} name="发布小哥" size={90} />
            <Avatar uid={10001} name="发布大哥" />
          </div>
        </div>

        <div className={styles.item}>
          <h2>Badge</h2>
          <div>
            <div>
              <Badge count={count} max={9}>
                不显示0，最大显示9
              </Badge>
            </div>
            <div>
              <Badge count={count} showZero>
                显示0
              </Badge>
            </div>
            <div>
              <Badge dot={dot}>
                红点
              </Badge>
            </div>
            <button onClick={this.increase} style={{marginTop: '50px'}}>increase</button>
            <button onClick={this.decline} style={{marginTop: '50px'}}>decline</button>
            <button onClick={this.toggleDot} style={{marginTop: '50px'}}>toggleDot</button>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Button</h2>
          <div>
            <Button size="small">默认按钮</Button>
            <Button size="small" loading>loading状态</Button>
            <Button size="small" disabled>disabled</Button>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Checkbox</h2>
          <div>
            <Checkbox value="A">多选框</Checkbox>
            <Checkbox value="B" checked>多选框</Checkbox>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Dialog</h2>
          <div>
            <Button onClick={()=>{this.setState({visible: true})}}>打開</Button>
            <Modal visible={visible} title="标题" footer closable maskClosable
                confirmText="打开一个新的Modal" onClose={this.firstModalCancelHandler}
                onConfirm={()=>{this.setState({visible: false})}}
                onCancel={()=>{this.setState({visible: false})}}
                >
              <div>这是内容</div>
            </Modal>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Example</h2>
          <div style={{position: 'relative', height: '100px'}}>
            <Example style={{top: '40px', zIndex: 999}} icon={''}>
              <div className={styles.overlay}>
                <div className={styles.text}>
                  只有签到真的用起来才能做这样的数据统计哦，管理员还等什么，
                  <br />去后台开启使用签到功能版
                </div>
              </div>
            </Example>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Filelist</h2>
          <div>
            <FileList toEach={DATA} downloadable onDelete={p => console.log(p)} />
          </div>
        </div>

        <div className={styles.item}>
          <h2>ImageList</h2>
          <div>
            <ImageList toEach={IMG_DATA} width="72px" height="72px"
                   bgSize="contain" />
            <ImageList toEach={IMG_DATA} showTitle width="32px" height="32px" bgSize="100% 100%"
                   cls="custom-img-list" />
          </div>
        </div>

        <div className={styles.item}>
          <h2>Input</h2>
          <div>
            <Input value={123} disabled={true}/>
            <Input.Search placeholder="search something" onSearch={() => {alert(123)}} />
            <Input.Textarea value={'1233'} needTip={true} maxlength={200} tiplength={150}/>
          </div>
        </div>

        <div className={styles.item}>
          <h2>MultiDropdown</h2>
          <div>
            <MutiDropDown onChange={this.onChange} excludeSelected
                    selected={this.state.selected}
                    placeholder="全部类型"
                    options={MULT_OPTIONS}/>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Pagination</h2>
          <div>
            <Pagination current={1}  total={50} onChange={function(page){console.log(page)}}/>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Radio</h2>
          <div>
            <Radio value={1} style={style} name="a">a</Radio>
            <Radio value={2} style={style} name="a">b</Radio>
            <Radio value={3} style={style} name="a">c</Radio>

            <Radio.RadioGroup onChange={onChange} value={1}>
              <Radio value={1} style={style} disabled>Disabled Radio1</Radio>
              <Radio value={2} checked style={style}>Radio2</Radio>
              <Radio value={3} checked style={style}>Radio3</Radio>
              <Radio value={4} checked style={style}>Radio4</Radio>
            </Radio.RadioGroup>
            <Radio.RadioGroup onChange={onChange} value={2} name="abc" cls={styles.radio}>
              <Radio value={1}>Radio1</Radio>
              <Radio value={2}>Radio2</Radio>
              <Radio value={3}>Radio3</Radio>
              <Radio value={4}>Radio4</Radio>
            </Radio.RadioGroup>

            <Radio.RadioGroup onChange={onChange} value={1} name="def" style={{marginTop: '10px'}}>
              <Radio.RadioButton value={1} disabled>Disabled Radio1</Radio.RadioButton>
              <Radio.RadioButton value={2}>Radio2</Radio.RadioButton>
              <Radio.RadioButton value={3} disabled>Disabled Radio3</Radio.RadioButton>
              <Radio.RadioButton value={4}>Radio4</Radio.RadioButton>
            </Radio.RadioGroup>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Switch</h2>
          <div>
            <Switch />
          </div>
        </div>

        <div className={styles.item}>
          <h2>Switch</h2>
          <div>
            <Switch />
          </div>
        </div>

        <div className={styles.item}>
          <h2>Textarea</h2>
          <div>
          <Textarea defaultValue="palce"
                  value={this.state.value}
                  maxLen={10}
                  onBlur={() => {
                      // console.log(this.state.value)
                      // this.setState({
                      //     value: this.state.data
                      // })
                  }}
                  autoFocus={true}
                  onChange={
                      (val, e) => {
                          console.log(val)
                          this.setState({
                              value: val
                          })
                      }
                  }
          />
          </div>
        </div>

        <div className={styles.item}>
          <h2>Toast</h2>
          <div>
            <button onClick={() => {
              Toast.success('test')
            }}>toast</button>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Uploder</h2>
          <div>
            <Uploader onSuccess={console.log} crossDomain={true}
                       url='https://web.jituancaiyun.com/sfs/webUpload/file?uid=10101001191214848&ts=1505094762217137&token=f3ee81fc20c2d3170b02a81ac9c4f8e2'
                        maxSize={10000}>
              <div>点击上传</div>
            </Uploader>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Web-comment</h2>
          <div>
            <button onClick={() => {
              this.setState({
                visibleComment: true
              })
            }}>显示</button>
            <button onClick={() => {
              this.setState({
                visibleComment: false
              })
            }}>隐藏</button>
            <div style={{width: '600px', height: '500px', position: 'relative', border: '1px solid #eee'}}>
              <Comment visible={visibleComment}
                      imageCount = {20}
                      fileCount = {10}
                      valueCount = {300}
                      placeholder = '说点什么呢的'
                      disableUploadFile={false}
                      onCancle={(x => x)}
                      onConfirm={x => x}
              />
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <h2>webFrame</h2>
          <div>
          <button onClick={this.change}>切换</button>
          <button onClick={this.show}>显示</button>
          <button onClick={this.hide}>隐藏</button>
          <button onClick={this.unmount}>销毁</button>
          <button onClick={this.switchDirection}>修改出现的方向</button>
          {
            renderWebFrame ?
              <WebFrame visible={visibleWebFrame} autoClose direction={direction} titleCls={styles.titleCls}
                        url={urls[index] && urls[index].url} width={width} height={height} titleHeight={100}
                        title={false} onClose={this.hide} />
              : null
          }

          </div>
        </div>

        
      </div>
    )
  }

  
}

// "prop-types": "^15.6.2",
//     "react": "^16.4.1",
//     "react-dom": "^16.4.1"

export default Test;