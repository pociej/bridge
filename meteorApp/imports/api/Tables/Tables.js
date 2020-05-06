import SimpleSchema from "simpl-schema";
import { POSITIONS } from "/imports/lib/positions.js";

// const TableSchea = new SimpleSchema({
//   players: {
//     type: Array,
//   },
//   "players.$": {
//     type: new SimpleSchema({
//       name: {
//         type: String,
//       },
//       _id: {
//         type: String,
//       },
//       position : {
//         type : String,
//         allowedValues :
//       }
//     }),
//   },
//   boards: {
//     type: Array,
//   },
//   "boards.$": {
//     board: {
//       type: String,
//     },
//     contract: {
//       type: String,
//     },
//   },
//   numberOfBoards: {
//     type: SimpleSchema.Integer,
//     optional: true,
//   },
// });

export const Tables = new Mongo.Collection("tables", {
  transform: (doc) => {},
});
