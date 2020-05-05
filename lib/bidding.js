import { EXTENDED_SUITS } from "./Suits.js";
import { SPECIAL_BIDS } from "./SpecialBids.js";
import "lodash.product";
import _ from "lodash";
import { arePartners } from "./positions.js";

//TODO refactor this naive implementation

const allBids = _.chain(_.product(_.range(1, 8), _.values(EXTENDED_SUITS)))
  .map((e) => {
    const interface = {
      isHigerThan: function (bid = { level: 0, suit: 0 }) {
        return (
          bid.level < this.level ||
          (bid.level === this.level && bid.suit < this.suit)
        );
      },
    };
    return Object.assign(Object.create(interface), { level: e[0], suit: e[1] });
  })
  .concat(
    _.map(_.values(SPECIAL_BIDS), (bid) => {
      return {
        bid,
      };
    })
  )
  .value();

const isSpecial = (bid) => {
  return _.values(SPECIAL_BIDS).indexOf(bid.bid) > -1;
};

const getLastNotPassBid = (bidding) => {
  return _.findLast(bidding, (bid) => {
    return bid.bid !== SPECIAL_BIDS.PASS;
  });
};

const getLastNoSpecialBid = (bidding) => {
  return _.findLast(bidding, (bid) => {
    return !isSpecial(bid);
  });
};

const isAllowed = ({ bid, bidding, position }) => {
  const lastNotPassBid = getLastNotPassBid(bidding);
  const lastNoSpecialBid = getLastNoSpecialBid(bidding);
  if (lastNotPassBid) {
    //Redouble allowed is previous bid was opponent

    if (bid.bid === SPECIAL_BIDS.REDOUBLE) {
      return (
        lastNotPassBid.bid === SPECIAL_BIDS.DOUBLE &&
        !arePartners(lastNotPassBid.position, position)
      );
    }
    //Double only if last bid is not special and made by opponent
    if (bid.bid === SPECIAL_BIDS.DOUBLE) {
      return (
        !isSpecial(lastNotPassBid) &&
        !arePartners(lastNotPassBid.position, position)
      );
    }

    if (!isSpecial(bid)) {
      return bid.isHigerThan(lastNoSpecialBid);
    }
  } else {
    if (isSpecial(bid)) {
      return bid.bid === SPECIAL_BIDS.PASS;
    }
  }
  return true;
};

export const getAllowedBids = ({ bidding, position }) => {
  const lastBid = getLastNotPassBid(bidding);
  return _.chain(allBids)
    .filter((bid) => {
      return isAllowed({ bid, bidding, position });
    })
    .groupBy((element) => {
      return element.level || "special";
    })
    .value();
};
