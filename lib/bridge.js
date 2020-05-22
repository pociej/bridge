import { deal } from "./deal.js";
import { bid, playCard } from "./moves";
import { _ } from "lodash";
import { SPECIAL_BIDS } from "./SpecialBids.js";
import { phases } from "./phases.js";

export const BridgeDealFactory = ({ vulnerability }) => {
  return {
    name: "bridgeDeal",
    turn: { moveLimit: 1 },
    setup: () => ({
      deal: deal(),
      vulnerability,
      bidding: [],
    }),
    phases,
  };
};
