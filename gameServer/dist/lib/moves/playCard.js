"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playCard = void 0;

var _lodash = require("lodash");

var _getTrickWinner = require("./getTrickWinner.js");

var _positions = require("../positions.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const playCard = (G, ctx, card) => {
  //TODO check if card is allowed to play 
  const currentCard = {
    card,
    position: ctx.currentPlayer
  }; //for some reason [...G.tricks] tdoesnt work here .... somthing with proxy i guess 

  let tricks = JSON.parse(JSON.stringify(G.tricks));
  let hands = JSON.parse(JSON.stringify(G.hands));
  let winner = '';

  let lastTrick = _lodash._.last(tricks);

  let next = null;
  let wasDummyPlaying = G.isDummyPlaying;
  let isDummyPlaying = false;
  let position = (0, _positions.playerIdToPosition)(next);

  if (position === G.dummy) {
    isDummyPlaying = true;
  }

  hands = _lodash._.keys(hands).reduce((result, hand) => {
    result[hand] = hands[hand].filter(c => {
      return !(c.suit === card.suit && c.value === card.value);
    });
    return result;
  }, {});

  if (lastTrick.cards.length === 4) {
    tricks = [...tricks, {
      cards: [currentCard]
    }];
  } else {
    tricks.pop();
    lastTrick.cards = [...lastTrick.cards, currentCard];
    lastTrick.winner = (0, _getTrickWinner.getTrickWinner)({
      trick: lastTrick,
      trump: G.contract.suit
    });
    tricks = [...tricks, lastTrick];
  }

  ;
  lastTrick = _lodash._.last(tricks);

  if (lastTrick.cards.length < 4) {
    next = (ctx.playOrderPos + 1) % ctx.numPlayers;
  } else {
    next = Number(lastTrick.winner);
  }

  ;
  position = (0, _positions.playerIdToPosition)(next);

  if (position === G.dummy) {
    isDummyPlaying = true;
  }

  return _objectSpread(_objectSpread({}, G), {}, {
    tricks,
    hands,
    isDummyPlaying,
    wasDummyPlaying
  });
};

exports.playCard = playCard;