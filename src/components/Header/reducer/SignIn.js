import { LOGIN_SUCCEEDED } from '../constants';

const initialState = {
  token: localStorage.getItem('token'),
  user: {},
  error: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED: {
    
      return {
       ...state,
      };
    }
    default :   
    return state;
  }
};
export default loginReducer;
