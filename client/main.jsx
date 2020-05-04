import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { renderRoutes } from "../imports/startup/client/routes.js";
import { observerUser } from "../imports/ui/state/dataFlowObservers";

console.log("ss", !!observerUser);
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById("app"));
  observerUser();
});
