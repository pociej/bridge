import SimpleSchema from "simpl-schema";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { Boards } from "/imports/api/Boards";

// export const getBoard = new ValidatedMethod({
//   name: "Board.getBoard",
//   validate : new SimpleSchema({
//     boardId : {
//       type : String
//     }
//   }),
//   run({ board, tableId }) {
//     //TODO IMPORTANT: update board meta

//     //Create new board for Table

//     const newBoardId = makeNewBoard();

//     const newTableBoard = TableBoards.insert({
//       boardId: newBoardId(),
//       state: BOARD_STATES.PLAYING,
//       tableId,
//     });

//     Tables.update(
//       { _id: tableId },
//       {
//         $push: {
//           boards: { boardId: newTableBoard, state: BOARD_STATES.PLAYING },
//         },
//       }
//     );
//   },
// });
