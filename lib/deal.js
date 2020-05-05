import "lodash.product";
import _ from "lodash";
import { deck } from "./deck.js";
import { POSITIONS } from "./positions.js";
export const deal = () => {
  return _.zipObject(
    _.keys(POSITIONS),
    _.chain(deck())
      .shuffle()
      .chunk(13)
      .map((hand) => {
        return _.sortBy(hand, ({ suit, value }) => {
          return -1 * (1000 * suit + value);
        });
      })
      .value()
  );
};
