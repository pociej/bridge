//Local collection

const Notifications = new Meteor.Collection("notifications");
import { NOTIFICATIONS_ADDED, NOTIFICATIONS_REMOVED } from '/imports/contants/ActionTypes.js'; 

export const subscribe = function({userId }){
  const subscription = Meteor.subscribe('notifications', userId); 

  Notifications.observeChanges({ 
    added(is,fields){

    }; 
  }); 

  return subscription(); 
}; 

