import * as types from './types';
import { RSAA } from 'redux-api-middleware';

export const loginUser = (username, password) => {
  // return { type: types.USER_LOGIN_SUCCESS, token };
  return {
    [RSAA]: {
      endpoint: 'https://academy-video-api.herokuapp.com/auth/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
      types: [
        types.USER_LOGIN_REQUEST,
        types.USER_LOGIN_SUCCESS,
        types.USER_LOGIN_FAILURE,
      ],
    },
  };
};

// const login = useCallback(
//   (e) => {
//     e.preventDefault();
//     fetch('https://academy-video-api.herokuapp.com/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw setError('Wrong credentials!');
//         }
//         return response.json();
//       })
//       .then((response) => {
//         console.log('loginFetch', response);
//         localStorage.setItem('token', response.token);
//         loginUser(response.token);
//         history.replace(
//           location.state ? location.state.referrer.pathname : '/content'
//         );
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   },
//   [username, password, history, loginUser, location.state]
// );

export const logoutUser = () => {
  return { type: types.USER_LOGOUT_SUCCESS };
};
