import React from "react";
import { Route, Switch } from "react-router";
import { Login } from "/imports/ui/components/Login/index.js";
import { Lobby } from "/imports/ui/components/Lobby";
import { Home } from "/imports/ui/components/Home/index.jsx";
import { NotFoundPage } from "/imports/ui/pages/NotFoundPage.jsx";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { store, history } from "/imports/ui/state/store/configureStore.js";
import { useStore } from "react-redux";
import { PrivateRoute } from "./PrivateRoute.js";

export const renderRoutes = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />

          <Route component={NotFoundPage} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};
