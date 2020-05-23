import { SPECIAL_BIDS } from '../SpecialBids.js';

export const bid = function (G, ctx, bid) {
  let contract = Object.assign({}, G.contract);
  switch (bid.bid) {
    case SPECIAL_BIDS.PASS:
      break;
    case SPECIAL_BIDS.DOUBLE:
      contract.double = true;
      break;
    case SPECIAL_BIDS.REDOUBLE:
      contract.redouble = true;
      break;
    default:
      contract = bid;
      break;
  };
  return { ...G, bidding: [...G.bidding, bid], contract };
};
