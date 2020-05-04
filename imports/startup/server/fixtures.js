Meteor.startup(function () {
  if (!Meteor.users.find().count()) {
    Accounts.createUser({ username: "player_1", password: "admin" });
    Accounts.createUser({ username: "player_2", password: "admin" });
    Accounts.createUser({ username: "player_3", password: "admin" });
    Accounts.createUser({ username: "player_4", password: "admin" });
  }
});
