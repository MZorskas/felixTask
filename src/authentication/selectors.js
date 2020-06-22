export const isAuthorized = (state) => state.authentication.token;
export const isLoginLoading = (state) => state.authentication.login.loading;
export const getLoginError = (state) => state.authentication.login.error;

export const isLogoutLoading = (state) => state.authentication.logout.loading;
export const getLogoutError = (state) => state.authentication.logout.error;
