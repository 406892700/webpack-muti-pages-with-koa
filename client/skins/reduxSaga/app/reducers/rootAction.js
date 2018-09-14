export const GET_USER_INFO_FROM_LOCALSTORY = 'GET_USER_INFO_FROM_LOCALSTORY';
export const getUserInfoFromLocalStorage = () => {
  const userInfo = localStorage.getItem('userInfo');
  return {
    type: GET_USER_INFO_FROM_LOCALSTORY,
    payload: userInfo ? JSON.parse(userInfo) : null,
  };
};

export default (state = {}, action) => {
  if (action.type === GET_USER_INFO_FROM_LOCALSTORY) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};
