import * as types from './types';
import { RSAA, createAction } from 'redux-api-middleware';

//Redux-api-middleware new way
export const loginUser = (username, password) =>
  createAction({
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
  });

// Redux-api-middleware old way
// export const loginUser = (username, password) => {
//   return {
//     [RSAA]: {
//       endpoint: 'https://academy-video-api.herokuapp.com/auth/login',
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//       types: [
//         types.USER_LOGIN_REQUEST,
//         types.USER_LOGIN_SUCCESS,
//         types.USER_LOGIN_FAILURE,
//       ],
//     },
//   };
// };

export const logoutUser = (token) =>
  createAction({
    endpoint: 'https://academy-video-api.herokuapp.com/auth/logout',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
    }),
    types: [
      types.USER_LOGOUT_REQUEST,
      types.USER_LOGOUT_SUCCESS,
      types.USER_LOGOUT_FAILURE,
    ],
  });

// const logout = useCallback(() => {
//   fetch('https://academy-video-api.herokuapp.com/auth/logout', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       token: token,
//     }),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw response;
//       }
//       localStorage.removeItem('token');
//       logoutUser();
//       console.log('token removed');
//       history.replace('/');
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }, [history, logoutUser, token]);
