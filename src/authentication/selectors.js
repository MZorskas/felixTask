export const isAuthorized = (state) => state.authentication.token;
export const isLoginIn = (state) => state.authentication.login.loading;
export const getLoginError = (state) => state.authentication.login.error;
