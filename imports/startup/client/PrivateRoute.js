import React from "react";
import { Route, Redirect } from "react-router";
import { useStore } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const store = useStore();
  const currentState = store.getState();
  const isUserLoggedIn = !!currentState.currentUser;
  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
