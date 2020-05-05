import { lodash } from "lodash";
import _ from "lodash";

export const POSITIONS = {
  N: "N",
  S: "S",
  E: "E",
  W: "W",
};

export const positionKey = {
  "0": "N",
  "1": "E",
  "2": "S",
  "3": "W",
};

const pairs = [
  ["W", "E"],
  ["N", "S"],
];

export const arePartners = (p, r) => {
  return _.find(pairs, (pair) => {
    return _.xor(pair, [p, r]).length === 0;
  });
};
