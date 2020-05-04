import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { currentUser } from "./currentUser.js";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const rootRedeurce = combineReducers({
  router: connectRouter(history),
  currentUser,
});

export default rootRedeurce;
