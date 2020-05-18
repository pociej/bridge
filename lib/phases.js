import { deal } from "./deal.js";
import { bid, playCard } from "./moves";
import { _ } from "lodash";
import { SPECIAL_BIDS } from "./SpecialBids.js";
import { getLastNotPassBid } from "./bidding.js";

export const PHASE_BIDDING = "PHASE_BIDDING";
export const PHASE_DECLARE = "PHASE_DECLARE";

export const phases = {
  [PHASE_BIDDING]: {
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
  [PHASE_DECLARE]: { moves: playCard },
};
