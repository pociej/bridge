"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bid = void 0;

var _SpecialBids = require("../SpecialBids.js");

var _positions = require("../positions.js");

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getDeclarer = function (bidding) {
  const lastRegularBid = _lodash._.findLast(bidding, bid => {
    return !!bid.suit;
  });

  return _lodash._.get(lastRegularBid, 'position', null);
};

const getDummy = function (declarerPosition) {
  if (!declarerPosition) return null;
  return _lodash._.keys(_positions.POSITIONS).find(p => {
    return (0, _positions.arePartners)(p, declarerPosition);
  });
};

const bid = function (G, ctx, bid) {
  let contract = Object.assign({}, G.contract);

  switch (bid.bid) {
    case _SpecialBids.SPECIAL_BIDS.PASS:
      break;

    case _SpecialBids.SPECIAL_BIDS.DOUBLE:
      contract.double = true;
      break;

    case _SpecialBids.SPECIAL_BIDS.REDOUBLE:
      contract.redouble = true;
      break;

    default:
      contract = bid;
      break;
  }

  ;
  const declarer = getDeclarer([...G.bidding, bid]);
  const dummy = getDummy(declarer);
  console.log("bid", bid);
  return _objectSpread(_objectSpread({}, G), {}, {
    bidding: [...G.bidding, bid],
    dummy,
    declarer,
    contract
  });
};

exports.bid = bid;