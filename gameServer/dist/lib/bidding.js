"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllowedBids = exports.getLastNoSpecialBid = exports.getLastNotPassBid = void 0;

var _Suits = require("./Suits.js");

var _SpecialBids = require("./SpecialBids.js");

require("lodash.product");

var _lodash2 = _interopRequireDefault(require("lodash"));

var _positions = require("./positions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO refactor this naive implementation
const allBids = _lodash2.default.chain(_lodash2.default.product(_lodash2.default.range(1, 8), _lodash2.default.values(_Suits.EXTENDED_SUITS))).map(e => {
  const iface = {
    isHigerThan: function (bid = {
      level: 0,
      suit: 0
    }) {
      return bid.level < this.level || bid.level === this.level && bid.suit < this.suit;
    }
  };
  return Object.assign(Object.create(iface), {
    level: e[0],
    suit: e[1]
  });
}).concat(_lodash2.default.map(_lodash2.default.values(_SpecialBids.SPECIAL_BIDS), bid => {
  return {
    bid
  };
})).value();

const isSpecial = bid => {
  return _lodash2.default.values(_SpecialBids.SPECIAL_BIDS).indexOf(bid.bid) > -1;
};

const getLastNotPassBid = bidding => {
  return _lodash2.default.findLast(bidding, bid => {
    return bid.bid !== _SpecialBids.SPECIAL_BIDS.PASS;
  });
};

exports.getLastNotPassBid = getLastNotPassBid;

const getLastNoSpecialBid = bidding => {
  return _lodash2.default.findLast(bidding, bid => {
    return !isSpecial(bid);
  });
};

exports.getLastNoSpecialBid = getLastNoSpecialBid;

const isAllowed = ({
  bid,
  bidding,
  position
}) => {
  const lastNotPassBid = getLastNotPassBid(bidding);
  const lastNoSpecialBid = getLastNoSpecialBid(bidding);

  if (lastNotPassBid) {
    //Redouble allowed is previous bid was opponent
    if (bid.bid === _SpecialBids.SPECIAL_BIDS.REDOUBLE) {
      return lastNotPassBid.bid === _SpecialBids.SPECIAL_BIDS.DOUBLE && !(0, _positions.arePartners)(lastNotPassBid.position, position);
    } //Double only if last bid is not special and made by opponent


    if (bid.bid === _SpecialBids.SPECIAL_BIDS.DOUBLE) {
      return !isSpecial(lastNotPassBid) && !(0, _positions.arePartners)(lastNotPassBid.position, position);
    }

    if (!isSpecial(bid)) {
      return bid.isHigerThan(lastNoSpecialBid);
    }
  } else {
    if (isSpecial(bid)) {
      return bid.bid === _SpecialBids.SPECIAL_BIDS.PASS;
    }
  }

  return true;
};

const getAllowedBids = ({
  bidding,
  position
}) => {
  const lastBid = getLastNotPassBid(bidding);
  return _lodash2.default.chain(allBids).filter(bid => {
    return isAllowed({
      bid,
      bidding,
      position
    });
  }).groupBy(element => {
    return element.level || "special";
  }).value();
};

exports.getAllowedBids = getAllowedBids;