import { COLORS } from "./colours.js";
import { HONOURS } from "./honours.js";
import "lodash.product";
import _ from "lodash";

export const honors = {};

export const deck = function () {
  return _.product(
    Array(13)
      .fill(0)
      .map((e, i) => {
        return i + 2;
      }),
    Object.keys(COLORS)
  ).map((e) => {
    return {
      suit: e[1],
      value: e[0],
    };
  });
};
