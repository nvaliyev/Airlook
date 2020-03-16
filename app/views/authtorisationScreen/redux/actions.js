import constans from "./constans";

export const isLoggedIn = (data) => ({ type: constans.IS_LOGGED, data });
export const setUserName = (data) => ({ type: constans.USER_NAME, data });
export const setUserPassword = (data) => ({ type: constans.USER_PASSWORD, data });