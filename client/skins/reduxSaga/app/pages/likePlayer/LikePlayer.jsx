import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayerList } from '../../reducers/likePlayer';

class LikePlayer extends Component {
  componentDidMount() {
    // debugger
    const { match: { params }, actions } = this.props;
    actions.getLikePlayer(params.id);
  }
  render() {
    const { likePlayer: { list } } = this.props;
    return (
      <div>
        <table style={{ borderCollapse: 'collapse' }} border="1">
          <thead>
            <tr>
              <th>姓名</th><th>球队</th><th>选秀年</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map(({
                id, name, team, draft,
              }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{team}</td>
                  <td>{draft}</td>
                </tr>))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    likePlayer: state.likePlayer,
  };
}, (dispatch) => {
  return {
    actions: {
      getLikePlayer: id => dispatch(getPlayerList(id)),
    },
  };
})(LikePlayer);
