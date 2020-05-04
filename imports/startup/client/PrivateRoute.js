import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUserLoggedIn = useSelector((state) => !!state.currentUser);
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
