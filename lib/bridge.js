import { deal } from "./deal.js";
import { bid, playCard } from "./moves";
import { _ } from "lodash";
import { SPECIAL_BIDS } from "./SpecialBids.js";
import { phases } from "./phases.js";
import { VULNERABILITY } from './Vulnerability.js';
import { POSITIONS } from './positions.js';

const getRandomVulnerabilty = () => {
  return _.values(VULNERABILITY)[Math.floor(Math.random() * 4)]
};

const getRandomDealer = () => {
  return _.values(POSITIONS)[Math.floor(Math.random() * 4)]
};

export const BridgeDealFactory = () => {
  return {
    name: "bridgeDeal",
    turn: { moveLimit: 1 },
    setup: () => ({
      deal: deal(),
      dealer: getRandomDealer(),
      vulnerability: getRandomVulnerabilty(),
      bidding: [],
      tricks: [[]],
    }),
    phases,
  };
};
