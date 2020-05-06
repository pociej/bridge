import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

export const history = createBrowserHistory();

function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );

  return store;
}

export const store = configureStore({ currentUser: "loading" });
