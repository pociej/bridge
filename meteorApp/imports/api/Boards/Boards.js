import { Mongo } from "meteor/mongo";
import { VULNERABILITY } from "/imports/lib/Vulnerability.js";
import { POSITIONS } from "/imports/lib/positions.js";
import SimpleSchema from "simpl-schema";

import { _ } from "lodash";

import { deal } from "/imports/lib/deal.js";

export const CardSchema = new SimpleSchema({
  suit: {
    type: Number,
    allowedValues: _.range(0, 5),
  },
  value: {
    type: Number,
    allowedValues: _.range(2, 15),
  },
});

export const DealSchema = new SimpleSchema({
  E: {
    type: Array,
  },
  "E.$": {
    type: CardSchema,
  },
  W: {
    type: Array,
  },
  "W.$": {
    type: CardSchema,
  },
  N: {
    type: Array,
  },
  "N.$": {
    type: CardSchema,
  },
  S: {
    type: Array,
  },
  "S.$": {
    type: CardSchema,
  },
});

export const BoardsSchema = new SimpleSchema({
  vulnerability: {
    type: String,
    allowedValues: _.values(VULNERABILITY),
  },
  deal: {
    type: DealSchema,
  },
  dealer: {
    type: String,
    allowedValues: _.values(POSITIONS),
  },
});

export const Boards = new Mongo.Collection("Boards");
Boards.attachSchema(BoardsSchema);
//TODO : we need here smart mechanism for deals pool
//so we avoid generating tones of boards on demand but from other hand it has to be big enough
//and to make sure there is always enough deals to server users
Meteor.startup(function () {
  if (Boards.find().count() === 0) {
    Array(1000)
      .fill()
      .forEach((e) => {
        Boards.insert({
          deal: deal(),
          vulnerability: _.values(VULNERABILITY)[_.random(0, 3)],
          dealer: _.values(POSITIONS)[_.random(0, 3)],
        });
      });
  }
});
