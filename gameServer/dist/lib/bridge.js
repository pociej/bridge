"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BridgeDealFactory = void 0;

var _deal = require("./deal.js");

var _moves = require("./moves");

var _lodash = require("lodash");

var _SpecialBids = require("./SpecialBids.js");

var _phases = require("./phases.js");

var _Vulnerability = require("./Vulnerability.js");

var _positions = require("./positions.js");

const getRandomVulnerabilty = () => {
  return _lodash._.values(_Vulnerability.VULNERABILITY)[Math.floor(Math.random() * 4)];
};

const getRandomDealer = () => {
  return _lodash._.values(_positions.POSITIONS)[Math.floor(Math.random() * 4)];
};

const BridgeDealFactory = () => {
  return {
    name: "bridgeDeal",
    turn: {
      moveLimit: 1
    },
    setup: () => ({
      hands: (0, _deal.deal)(),
      dealer: getRandomDealer(),
      vulnerability: getRandomVulnerabilty(),
      bidding: [],
      tricks: [{
        cards: []
      }],
      contract: {}
    }),
    phases: _phases.phases
  };
};

exports.BridgeDealFactory = BridgeDealFactory;