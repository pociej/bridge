import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "/imports/ui/components/Login/index.js";
import { Lobby } from "/imports/ui/components/Lobby";
import { Table } from "/imports/ui/components/Table";
import { Home } from "/imports/ui/components/Home/index.jsx";
import { NotFoundPage } from "/imports/ui/pages/NotFoundPage.jsx";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { store, history } from "/imports/ui/state/store/configureStore.js";
import { useStore } from "react-redux";
import { PrivateRoute } from "./PrivateRoute.js";
import { Notifications } from "/imports/ui/components/Notifications/";

export const renderRoutes = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {/* <Notification></Notifications> */}
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/table/:tableId" component={Table} />
          <Route component={NotFoundPage} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};
