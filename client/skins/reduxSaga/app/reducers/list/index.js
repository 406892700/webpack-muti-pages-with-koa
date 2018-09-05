const user = 123;

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
  console.log('fuck2');
  const { type } = action;
  switch (type) {
  case GET_NAME:
    return state;
  default: return state;
  }
};

export default reducer;
