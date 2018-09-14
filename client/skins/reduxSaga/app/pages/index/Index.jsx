import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList } from '../../reducers/index/index';
import { Link } from 'react-router-dom';

class Index extends Component {
  componentDidMount() {
    this.props.actions.getUserList();
  }

  handleClick = (id) => {

  }
  
  render() {
    debugger
    const { indexProps: { list, isFetching } } = this.props;
    return (
      <div>
        <table style={{ borderCollapse: 'collapse' }} border="1">
          <thead>
            <tr>
              <th>姓名</th><th>年龄</th><th>爱好</th><th>查看我喜欢的球星</th>
            </tr>
          </thead>
          <tbody>
            {
              isFetching && (<tr><td colSpan="4">加载中...</td></tr>)
            }
            {
              list.map(({ 
                name, age, id, hobby,
              }) => {
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{hobby}</td>
                    <td><Link to={`userinfo/${id}`}>查看</Link></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    indexProps: state.index,
  };
}, (dispatch) => {
  return {
    actions: {
      getUserList: () => dispatch(getUserList()),
    },
  };
})(Index);
