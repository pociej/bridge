import { deal } from "./deal.js";
import { bid, playCard } from "./moves";
import { _ } from "lodash";
import { SPECIAL_BIDS } from "./SpecialBids.js";

export const BridgeDealFactory = ({ vulnerability }) => {
  console.log("fucktory");
  return {
    name: "bridgeDeal",
    setup: () => ({
      deal: deal(),
      vulnerability,
      bidding: [],
    }),
    phases: {
      bidding: {
        moves: { bid },
        endIf: (G) => {
          return (
            G.bidding.length > 2 &&
            _.every(
              _.takeRight(G.bidding, 3),
              (e) => e.bid === SPECIAL_BIDS.PASS
            )
          );
        },

        start: true,
      },
      declare: { playCard },
    },
  };
};
