import { deal } from "./deal.js";
import { bid, playCard } from "./moves";
import { _ } from "lodash";
import { SPECIAL_BIDS } from "./SpecialBids.js";
import { getLastNotPassBid } from "./bidding.js";
import { TurnOrder } from 'boardgame.io/core';
import { positionKey } from "/imports/lib/positions.js";
export const PHASE_BIDDING = "PHASE_BIDDING";
export const PHASE_DECLARE = "PHASE_DECLARE";


const getNextTrickLeadPosition = function (trick) {
  //the first lead 
  if (!trick) {
    console.log("G", G.bidding);
    const lastBidPostion = (positionKey[_.last(G.bidding).position] + 2) % 4;
    return 0;
  }
}

const getTrickWinner = function (trick, contract) {
  console.log(trick);
  return 0;
};

export const phases = {
  [PHASE_BIDDING]: {
    turn: {
      moveLimit: 1,
      order: {
        first: (G, ctx) => {
          return positionKey[G.dealer]
        },
        next: (G, ctx) => (ctx.playOrderPos + 1) % ctx.numPlayers,
        playOrder: (G, ctx) => ['0', '1', '2', '3']
      },
    },
    moves: { bid },
    endIf: (G) => {
      return (
        //four passes
        (G.bidding.length === 4 &&
          _.every(
            _.takeRight(G.bidding, 4),
            (e) => e.bid === SPECIAL_BIDS.PASS
          )) ||
        (G.bidding.length > 3 &&
          _.every(
            _.takeRight(G.bidding, 3),
            (e) => e.bid === SPECIAL_BIDS.PASS
          ))
      );
    },
    start: true,
    next: PHASE_DECLARE,
  },
  [PHASE_DECLARE]: {
    turn: {
      moveLimit: 1,
      order: {
        // Get the initial value of playOrderPos.
        // This is called at the beginning of the phase.
        first: (G, ctx) => {
          const a = getNextTrickLeadPosition(G);
          return 0;
        },

        // Get the next value of playOrderPos.
        // This is called at the end of each turn.
        // The phase ends if this returns undefined.
        next: (G, ctx) => {
          const lastTrick = _.last(G.tricks);
          if (lastTrick.length < 4) {
            return (ctx.playOrderPos + 1) % ctx.numPlayers;
          } else {
            return getTrickWinner(lastTrick, G.contract);
          }
        },


        // OPTIONAL:
        // Override the initial value of playOrder.
        // This is called at the beginning of the game / phase.
        playOrder: (G, ctx) => ['0', '1', '2', '3']
      }
    },
    moves: { playCard }
  },
};
