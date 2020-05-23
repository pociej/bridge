
import React from 'react';
import { NOTIFICATION_STATUS__UNREAD, NOTIFICATION_STATUS__READ } from '/imports/constants';
import { useTracker } from "meteor/react-meteor-data";
import { Message, Button } from 'semantic-ui-react'
import { history } from "/imports/ui/state/store/configureStore.js";

const UserNotifications = new Mongo.Collection('internalNotifications');

window.un = UserNotifications;
//for now only table invitations 

export const InternalNotifications = () => {

  const { notifications, ready } = useTracker(() => {
    const sub = Meteor.subscribe('internalNotifications');
    return {
      ready: sub.ready(),
      notifications: UserNotifications.find().fetch(),
    }
  });

  return ready ? notifications.map((notification) => {
    const header = `table invitation from ${notification.owner}`;
    return <Message
      key={notification._id}
      info
      header={header}
      content={
        < div >
          <Button secondary onClick={() => {
            UserNotifications._collection.remove(notification._id);
            //should sent back notification that user rejected inivitation 
          }}> Cancel </Button>
          <Button primary onClick={() => {
            //this should dispatch the event 
            history.push(`/table/${notification.tableId}`);
          }}> Join </Button>
        </div >
      }
    />
  }) : ''
}
