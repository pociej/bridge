import SimpleSchema from "simpl-schema";

new SimpleSchema({
  name: String,
}).validate({
  name: 2,
});

const TableSchea = new SimpleSchema({
  players: {
    type: [String],
  },
  boards: {
    type: [new SimpleSchema({})],
  },
});

export const Tables = new Mongo.Collection("tables", {
  transform: (doc) => {},
});
