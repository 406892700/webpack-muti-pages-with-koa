const initialState = {
  list: [],
  isFetching: false,
};

/**
 * 球员列表
 */
export const GET_PLAYER_LIST = 'GET_PLAYER_LIST';
export const getPlayerList = (id) => {
  return {
    type: GET_PLAYER_LIST,
    payload: { id },
  };
};

/**
 * 获取球员列表
 */
export const REQUEST_PLAYER_LIST = 'REQUEST_PLAYER_LIST';
export const requestPlayerList = () => {
  return {
    type: REQUEST_PLAYER_LIST,
    payload: {
    },
  };
};

/**
 * 球员列表请求成功
 */
export const RECEIVE_PLAYER_LIST = 'RECEIVE_PLAYER_LIST';
export const receivePlayerList = (list) => {
  return {
    type: RECEIVE_PLAYER_LIST,
    payload: {
      list,
    },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_PLAYER_LIST:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVE_PLAYER_LIST: 
    return {
      ...state,
      list: action.payload.list,
      isFetching: false,
    };
  default: return state;
  }
};

export default reducer;
