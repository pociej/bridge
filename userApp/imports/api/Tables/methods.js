import SimpleSchema from "simpl-schema";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { _ } from "lodash";
import { makeNewBoard } from "/imports/api/Boards";
import { BOARD_STATES } from "/imports/constants/BoardStates.js";
import { Tables } from "./Tables.js";
import { TableBoards, Boards } from "/imports/api/Boards";
export const createNewTable = new ValidatedMethod({
  name: "Table.create",
  validate: new SimpleSchema({
    players: {
      type: Array,
    },
    "players.$": {
      type: new SimpleSchema({
        position: {
          type: String,
        },
        username: {
          type: String,
        },
      }),
    },
  }).validator(),
  run({ players }) {
    if (Meteor.isServer) {
      const owner = Meteor.users.findOne(this.userId);
      const tablePlayers = players.map(({ position, username }) => {
        const user = Meteor.users.findOne({ username });
        if (!user) {
          throw new Meteor.Error("No user", `No such user ${username}`);
        }
        return { position, username, userId: user._id, atTable: false };
      });

      const tableId = Tables.insert({
        owner: {
          name: owner.username,
          id: owner._id
        },
        players: tablePlayers,
        boards: [],
      });

      const newTableBoard = TableBoards.insert({
        boardId: makeNewBoard(),
        state: BOARD_STATES.PLAYING,
        tableId,
      });

      Tables.update(tableId, {
        $push: {
          boards: { boardId: newTableBoard, state: BOARD_STATES.PLAYING },
        },
      });
      return tableId;
    }
  },
});

export const finishBoard = new ValidatedMethod({
  name: "Table.finishBoard",
  validate() { },
  run({ board, tableId }) {
    //TODO IMPORTANT: update board meta

    //Create new board for Table

    const newBoardId = makeNewBoard();

    const newTableBoard = TableBoards.insert({
      boardId: newBoardId(),
      state: BOARD_STATES.PLAYING,
      tableId,
    });

    Tables.update(
      { _id: tableId },
      {
        $push: {
          boards: { boardId: newTableBoard, state: BOARD_STATES.PLAYING },
        },
      }
    );
  },
});
