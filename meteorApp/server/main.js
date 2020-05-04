import { Meteor } from "meteor/meteor";
import { deal } from "/imports/lib/deal.js";
Meteor.startup(() => {
  console.log(deal);
  // code to run on server at startup
});
