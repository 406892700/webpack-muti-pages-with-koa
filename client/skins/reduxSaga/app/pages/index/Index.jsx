import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getUserList } from '../../reducers/index/index';
import { Link } from 'react-router-dom';

class Index extends Component {
  render() {
    const { 
      age, id, hobby, name,
    } = this.props.userInfo;
    return (
      <div>
        <table style={{ borderCollapse: 'collapse' }} border="1">
          <thead>
            <tr>
              <th>姓名</th><th>年龄</th><th>爱好</th><th>查看我喜欢的球星</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{age}</td>
              <td>{hobby}</td>
              <td><Link to={`/userinfo/${id}`}>查看</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    userInfo: state.userInfo.loginUser,
  };
})(Index);
