"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deck = exports.honors = void 0;

var _honours = require("./honours.js");

var _Suits = require("./Suits.js");

require("lodash.product");

var _lodash2 = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const honors = {};
exports.honors = honors;

const deck = function () {
  return _lodash2.default.product(Array(13).fill(0).map((e, i) => {
    return i + 2;
  }), Object.values(_Suits.SUITS)).map(e => {
    return {
      suit: e[1],
      value: e[0]
    };
  });
};

exports.deck = deck;