import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { currentUser } from "./currentUser.js";
import { createBrowserHistory } from "history";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    currentUser,
  });

export default createRootReducer;
