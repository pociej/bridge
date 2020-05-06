import { Mongo } from "meteor/mongo";
import { VULNERABILITY } from "/imports/lib/Vulnerability.js";
import { POSITIONS } from "/imports/lib/positions.js";
import SimpleSchema from "simpl-schema";
import { _ } from "lodash";
import { SPECIAL_BIDS } from "/import/lib/SpecialBids.js";
import { CardSchema } from "./Boards.js";
export const PlayedBoards = new Mongo.Collection("playedBoards");

export const ContractSchema = new SimpleSchema({
  level: {
    type: Number,
    allowedValues: _.range(1, 8),
  },
  suit: {
    type: Number,
    allowedValues: _.range(0, 4),
  },
  double: {
    type: String,
    allowedValues: [SPECIAL_BIDS.DOUBLE, SPECIAL_BIDS.REDOUBLE],
  },
});

export const BiddingSchema = new SimpleSchema({});

//TODO : consider DB denormalisation to avoid joins

const PlayedBoardSchema = new SimpleSchema({
  boardId: {
    type: String,
  },
  //boardgame.io id
  gameId: {
    type: String,
  },

  //NOTE: below is kinda redundancy, but from other habd it could be better to have data in such
  //easy readable form than everytime get boardGame io data and parse them
  playDetails: {
    optional: true,
    type: new SimpleSchema({
      contract: {
        type: ContractSchema,
      },
      declarer: {
        type: String,
        allowedValues: _.values(POSITIONS),
      },
      tricks: {
        type: Array,
        minCount: 13,
        maxCount: 13,
      },
      "tricks.$": {
        type: new SimpleSchema({
          leader: {
            type: String,
            allowedValues: _.values(POSITIONS),
          },
          cards: {
            type: Array,
            minCount: 4,
            maxCount: 4,
          },
          "cards.$": {
            type: CardSchema,
          },
        }),
      },
      result: {
        //tricks balance
        type: SimpleSchema.Integer,
      },
      score: {
        type: SimpleSchema.Integer,
      },
    }),
  },
});
