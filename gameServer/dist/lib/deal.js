"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deal = void 0;

require("lodash.product");

var _lodash2 = _interopRequireDefault(require("lodash"));

var _deck = require("./deck.js");

var _positions = require("./positions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deal = () => {
  return _lodash2.default.zipObject(_lodash2.default.keys(_positions.POSITIONS), _lodash2.default.chain((0, _deck.deck)()).shuffle().chunk(13).map(hand => {
    return _lodash2.default.sortBy(hand, ({
      suit,
      value
    }) => {
      return -1 * (1000 * suit + value);
    });
  }).value());
};

exports.deal = deal;