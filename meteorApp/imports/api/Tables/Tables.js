import SimpleSchema from "simpl-schema";
// const TableSchea = new SimpleSchema({
//   players: {
//     type: [String],
//   },
//   boards: {
//     type: [new SimpleSchema({})],
//   },
// });

export const Tables = new Mongo.Collection("tables", {
  transform: (doc) => {},
});
