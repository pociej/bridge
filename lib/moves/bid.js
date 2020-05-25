import { SPECIAL_BIDS } from '../SpecialBids.js';
import { arePartners, POSITIONS } from '../positions.js';
import { _ } from 'lodash';

const getDeclarer = function (bidding) {
  const lastRegularBid = _.findLast(bidding, (bid) => {
    return !!bid.suit;
  });
  return _.get(lastRegularBid, 'position', null);
};

const getDummy = function (declarerPosition) {
  if (!declarerPosition) return null;
  return _.keys(POSITIONS).find(p => {
    return arePartners(p, declarerPosition);
  })
};

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
  const declarer = getDeclarer([...G.bidding, bid]);
  const dummy = getDummy(declarer);
  console.log("bid", bid);
  return { ...G, bidding: [...G.bidding, bid], dummy, declarer, contract };
};
