import "lodash.product";
import _ from "lodash";
import { deck } from "./deck.js";
import { POSITIONS } from "./positions.js";
export const deal = _.zipObject(
  _.keys(POSITIONS),
  _.chain(deck()).shuffle().chunk(13).value()
);
