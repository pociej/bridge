import SimpleSchema from "simpl-schema";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { _ } from "lodash";
import { makeNewBoard } from "/imports/api/Boards";
import { BOARD_STATES } from "/imports/constants/BoardStates.js";
import { Tables } from "./Tables.js";

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
      const tablePlayers = players.map(({ position, username }) => {
        const userId = Meteor.users.findOne({ username });
        if (!userId) {
          throw new Meteor.Error("No user", `No such user ${username}`);
        }
        return { position, username, userId, atTable: false };
      });
      const tableBoard = {
        boardId: makeNewBoard(),
        state: BOARD_STATES.PLAYING,
      };
      return Tables.insert({
        players: tablePlayers,
        boards: [tableBoard],
      });
    }
  },
});
