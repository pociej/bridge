"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phases = exports.PHASE_DECLARE = exports.PHASE_BIDDING = void 0;

var _deal = require("./deal.js");

var _moves = require("./moves");

var _lodash = require("lodash");

var _SpecialBids = require("./SpecialBids.js");

var _bidding = require("./bidding.js");

var _core = require("boardgame.io/core");

var _positions = require("./positions.js");

const PHASE_BIDDING = "PHASE_BIDDING";
exports.PHASE_BIDDING = PHASE_BIDDING;
const PHASE_DECLARE = "PHASE_DECLARE";
exports.PHASE_DECLARE = PHASE_DECLARE;

const getFirstLeadPosition = function (G) {
  console.log("F", G.bidding);
  return (_positions.positionKey[_lodash._.last(G.bidding).position] + 2) % 4;
};

const phases = {
  [PHASE_BIDDING]: {
    turn: {
      moveLimit: 1,
      order: {
        first: (G, ctx) => {
          return (0, _positions.positionToPlayerId)(G.dealer);
        },
        next: (G, ctx) => (ctx.playOrderPos + 1) % ctx.numPlayers,
        playOrder: (G, ctx) => ['0', '1', '2', '3']
      }
    },
    moves: {
      bid: _moves.bid
    },
    endIf: G => {
      const shouldFinish = //four passes
      G.bidding.length === 4 && _lodash._.every(_lodash._.takeRight(G.bidding, 4), e => e.bid === _SpecialBids.SPECIAL_BIDS.PASS) || G.bidding.length > 3 && _lodash._.every(_lodash._.takeRight(G.bidding, 3), e => e.bid === _SpecialBids.SPECIAL_BIDS.PASS);

      return shouldFinish;
    },
    start: true,
    next: PHASE_DECLARE
  },
  [PHASE_DECLARE]: {
    turn: {
      moveLimit: 1,
      order: {
        // Get the initial value of playOrderPos.
        // This is called at the beginning of the phase.
        first: (G, ctx) => {
          const a = getFirstLeadPosition(G);
          console.log("FIRST LEAD", a);
          return getFirstLeadPosition(G);
        },
        // Get the next value of playOrderPos.
        // This is called at the end of each turn.
        // The phase ends if this returns undefined.
        next: (G, ctx) => {
          const lastTrick = _lodash._.last(G.tricks);

          let next = null;

          if (lastTrick.cards.length < 4) {
            console.log('Gchecking in next', G.wasDummyPlaying, ctx.playOrderPos);
            next = (ctx.playOrderPos + (G.wasDummyPlaying ? 3 : 1)) % ctx.numPlayers;
          } else {
            next = Number(lastTrick.winner);
          }

          ;
          const position = (0, _positions.playerIdToPosition)(next);
          console.log("position", position, G.dummy);

          if (position === G.dummy) {
            console.log("NEXT TO PLAY", (0, _positions.positionToPlayerId)(G.declarer));
            return (0, _positions.positionToPlayerId)(G.declarer);
          }

          console.log("NEXT", next);
          return next;
        },
        // OPTIONAL:
        // Override the initial value of playOrder.
        // This is called at the beginning of the game / phase.
        playOrder: (G, ctx) => ['0', '1', '2', '3']
      }
    },
    moves: {
      playCard: _moves.playCard
    }
  }
};
exports.phases = phases;