import { Tables } from '/imports/api/Tables';
import { NOTIFICATION_TYPE__TABLE_INVITATION } from './'

Meteor.publish('internalNotifications', function (roomId) {
  //NOTE : we should consider using events emmiter for consitency here instead of 
  //collection observers 

  //FOR now only new tables invitation 
  let initializing = true;
  const handle = Tables.find().observeChanges({

    added: (id, { owner }) => {
      if (!initializing) {
        this.added('internalNotifications', `table_${id}`, {
          type: NOTIFICATION_TYPE__TABLE_INVITATION,
          tableId: id,
          owner,
        });
      }
    },
    removed: (id) => {
      this.removed('internalNotifications', `table_${id}`);
    }
  });

  initializing = false;
  this.ready();
  this.onStop(() => handle.stop());
}); 
