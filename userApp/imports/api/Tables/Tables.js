import SimpleSchema from "simpl-schema";
import { POSITIONS } from "/imports/lib/positions.js";
import { _ } from "lodash";
import { BOARD_STATES } from "/imports/constants/BoardStates.js";

const TableSchema = new SimpleSchema({
  players: {
    type: Array,
  },
  "players.$": {
    type: new SimpleSchema({
      username: {
        type: String,
      },
      userId: {
        type: String,
      },
      position: {
        type: String,
        allowedValues: _.values(POSITIONS),
      },
      atTable: {
        type: Boolean,
      },
    }),
  },
  boards: {
    type: Array,
    optional: true,
  },
  "boards.$": {
    type: new SimpleSchema({
      state: {
        type: String,
        allowedValues: _.values(BOARD_STATES),
      },
      boardId: {
        type: String,
      },
    }),
  },
  numberOfBoards: {
    type: SimpleSchema.Integer,
    optional: true,
  },
  owner: {
    type: new SimpleSchema({
      id: {
        type: String,
      },
      name: {
        type: String
      }
    })
  }
});


const playerInterface = {
  getCurrentBoardId() {
    return this.boards.find((board) => {
      return board.state === BOARD_STATES.PLAYING;
    });
  }
};
export const Tables = new Mongo.Collection("tables", {
  transform: (doc) => {
    return Object.assign(Object.create(playerInterface), doc);
  },
});

Tables.attachSchema(TableSchema);
