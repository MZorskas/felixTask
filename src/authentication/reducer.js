import * as types from './types';

const DEFAULT_AUTHENTICATION_STATE = {
  token: localStorage.getItem('token'),
  error: null,
};

function authentication(state = DEFAULT_AUTHENTICATION_STATE, action) {
  switch (action.type) {
    case types.USER_LOGIN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case types.USER_LOGOUT: {
      return {
        ...state,
        token: null,
      };
    }
    default:
      return state;
  }
}
export default authentication;

// import { combineReducers } from 'redux';

// import authentication from './authentication';
// import content from './content';

// export default combineReducers({
//   authentication,
//   content,
// });
