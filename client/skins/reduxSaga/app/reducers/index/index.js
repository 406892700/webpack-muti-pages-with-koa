const users = ['simple', 'xhy', 'xuhuaiyuan'];

const initialState = null;

const GET_NAME_BY_INDEX = 'GET_NAME_BY_INDEX';
export const getNamebyIndex = (index) => {
  return {
    type: GET_NAME_BY_INDEX,
    payload: {
      index,
    },
  };
};

const reducer = (state = initialState, action) => {
  console.log('fuck1');
  const { type } = action;
  switch (type) {
  case GET_NAME_BY_INDEX:
    return {
      user: users[action.payload.index],
    };
  default: return state;
  }
};

export default reducer;
