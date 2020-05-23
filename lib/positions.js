import { lodash } from "lodash";
import _ from "lodash";

export const POSITIONS = {
  N: "N",
  S: "S",
  E: "E",
  W: "W",
};

export const positionKey = {
  "N": 0,
  "E": 1,
  "S": 2,
  "W": 3,
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
