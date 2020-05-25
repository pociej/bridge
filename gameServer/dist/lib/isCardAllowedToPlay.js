"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCardAllowedToPlay = void 0;

var _lodash = require("lodash");

var _positions = require("./positions.js");

const isCardAllowedToPlay = ({
  G,
  card,
  ctx
}) => {
  const thisTrick = _lodash._.last(G.tricks);

  if (thisTrick.cards.length === 4) return true;

  const firstCardInCurrentTrick = _lodash._.first(_lodash._.get(thisTrick, 'cards')); //TODO : refactor hosuld be helper like , getCurrentPlayerPosition


  const position = _lodash._.find(_lodash._.keys(_positions.positionKey), p => {
    return _positions.positionKey[p] == ctx.currentPlayer;
  });

  const firstCardSuit = _lodash._.get(firstCardInCurrentTrick, 'card.suit', card.suit);

  const hasColor = _lodash._.find(G.hands[position], card => {
    return card.suit === firstCardSuit;
  });

  return !hasColor || firstCardSuit === card.suit;
};

exports.isCardAllowedToPlay = isCardAllowedToPlay;