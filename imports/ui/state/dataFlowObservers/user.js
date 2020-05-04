import React from "react";
import { Tracker } from "meteor/tracker";
import { userLogin, userLogout } from "../actions/userLogin.js";
import { store, history } from "/imports/ui/state/store/configureStore.js";

// console.log("store", userLogout());
export const observerUser = () => {
  Tracker.autorun(() => {
    const user = Meteor.user();
    if (Meteor.user()) {
      // store.dispatch(userLogin(user));
    } else {
      console.log("user", user);
      console.log("ada", userLogout);
      store.dispatch(userLogout);
    }
  });
};

//TODO : Here we should also observe changes in current user document
