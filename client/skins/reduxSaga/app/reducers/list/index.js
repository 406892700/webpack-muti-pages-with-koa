const initialState = {
  user: '',
};

const GET_NAME = 'GET_NAME';
export const getName = () => {
  return {
    type: GET_NAME,
  };
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
  case GET_NAME:
    return state;
  default: return state;
  }
};

export default reducer;
