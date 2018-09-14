const initialState = {
  list: [],
  isFetching: false,
};

/**
 * 用户列表
 */
export const GET_USER_LIST = 'GET_USER_LIST';
export const getUserList = () => {
  return {
    type: GET_USER_LIST,
    payload: {},
  };
};

/**
 * 获取用户列表
 */
export const REQUEST_USER_LIST = 'REQUEST_USER_LIST';
export const requestUserList = (index) => {
  return {
    type: REQUEST_USER_LIST,
    payload: {
      index,
    },
  };
};

/**
 * 用户列表请求成功
 */
export const RECEIVE_USER_LIST = 'RECEIVE_USER_LIST';
export const receiveUserList = (list) => {
  return {
    type: RECEIVE_USER_LIST,
    payload: {
      list,
    },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_USER_LIST:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVE_USER_LIST: 
    return {
      ...state,
      list: action.payload.list,
      isFetching: false,
    };
  default: return state;
  }
};

export default reducer;
