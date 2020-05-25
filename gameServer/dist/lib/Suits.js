"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUIT_SYMBOLS = exports.EXTENDED_SUITS = exports.SUITS = void 0;
const SUITS = {
  CLUBS: 0,
  DIAMONDS: 1,
  HEARTS: 2,
  SPADES: 3
};
exports.SUITS = SUITS;
const EXTENDED_SUITS = Object.assign({
  NT: 4
}, SUITS);
exports.EXTENDED_SUITS = EXTENDED_SUITS;
const SUIT_SYMBOLS = {
  0: "♣",
  1: "♦",
  2: "♥",
  3: "♠",
  4: "NT"
};
exports.SUIT_SYMBOLS = SUIT_SYMBOLS;