import { USER_LOGIN, USER_LOGOUT } from "/imports/constants/ActionTypes.js";

export const currentUser = (state = null, action) => {
  console.log("dsadas", action, state);
  if (action.type === USER_LOGIN) {
    return action.user;
  }
  if (action.type === USER_LOGOUT) {
    return {};
  }
  return null;
};
