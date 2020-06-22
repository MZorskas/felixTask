import authentication from '../../../authentication';
import history from '../../components/history';

const authHandling = ({ dispatch, getState }) => (next) => (action) => {
  console.log('authHandling', { dispatch, getState, next, action, history });
  //   console.log('authHandling', action.error);
  if (action.type === authentication.types.USER_LOGIN_SUCCESS) {
    localStorage.setItem('token', action.payload.token);
    history.replace(
      history.location.state
        ? history.location.state.referrer.pathname
        : '/content'
    );
  }
  if (action.type === authentication.types.USER_LOGOUT_SUCCESS) {
    localStorage.removeItem('token');
    history.replace('/');
  }
  //   if (action === 401) {
  //     dispatch(authentication.actions.logout());
  //   }
  return next(action);
};

export default authHandling;
