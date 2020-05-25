"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tablePositionToPosition = exports.positionToTablePosition = exports.playerIdToPosition = exports.positionToPlayerId = exports.arePartners = exports.TABLE_POSITIONS = exports.TABLE_POSITION_PLAYER = exports.TABLE_POSITION_CHO = exports.TABLE_POSITION_RHO = exports.TABLE_POSITION_LHO = exports.positionKey = exports.POSITIONS = exports.POSITION_W = exports.POSITION_S = exports.POSITION_E = exports.POSITION_N = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const POSITION_N = 'N';
exports.POSITION_N = POSITION_N;
const POSITION_E = 'E';
exports.POSITION_E = POSITION_E;
const POSITION_S = 'S';
exports.POSITION_S = POSITION_S;
const POSITION_W = 'W';
exports.POSITION_W = POSITION_W;
const POSITIONS = {
  N: "N",
  E: "E",
  S: "S",
  W: "W"
}; //TODO : get rid of this 

exports.POSITIONS = POSITIONS;
const positionKey = {
  "N": 0,
  "E": 1,
  "S": 2,
  "W": 3
};
exports.positionKey = positionKey;
const TABLE_POSITION_LHO = 'LHO';
exports.TABLE_POSITION_LHO = TABLE_POSITION_LHO;
const TABLE_POSITION_RHO = 'RHO';
exports.TABLE_POSITION_RHO = TABLE_POSITION_RHO;
const TABLE_POSITION_CHO = 'CHO';
exports.TABLE_POSITION_CHO = TABLE_POSITION_CHO;
const TABLE_POSITION_PLAYER = 'PLAYER';
exports.TABLE_POSITION_PLAYER = TABLE_POSITION_PLAYER;
const TABLE_POSITIONS = {
  PLAYER: TABLE_POSITION_PLAYER,
  LHO: TABLE_POSITION_LHO,
  CHO: TABLE_POSITION_CHO,
  RHO: TABLE_POSITION_RHO
};
exports.TABLE_POSITIONS = TABLE_POSITIONS;
const pairs = [["W", "E"], ["N", "S"]];

const arePartners = (p, r) => {
  return _lodash.default.find(pairs, pair => {
    return _lodash.default.xor(pair, [p, r]).length === 0;
  });
};

exports.arePartners = arePartners;

const positionToPlayerId = position => {
  return positionKey[position];
};

exports.positionToPlayerId = positionToPlayerId;

const playerIdToPosition = playerId => {
  return _lodash.default.keys(positionKey).find(key => {
    return positionKey[key] == playerId;
  });
};

exports.playerIdToPosition = playerIdToPosition;

const positionToTablePosition = (position, playerPosition) => {
  const getPositionIndex = pos => _lodash.default.findIndex(_lodash.default.keys(POSITIONS), p => {
    return p === pos;
  });

  const playerPositionIndex = getPositionIndex(playerPosition);
  const positionIndex = getPositionIndex(position);
  return _lodash.default.keys(TABLE_POSITIONS)[(4 + positionIndex - playerPositionIndex) % 4];
};

exports.positionToTablePosition = positionToTablePosition;

const tablePositionToPosition = (position, playerPosition) => {
  const positionIndex = _lodash.default.findIndex(_lodash.default.keys(TABLE_POSITIONS), p => {
    return position === p;
  });

  const playerPositionIndex = _lodash.default.findIndex(_lodash.default.keys(POSITIONS), p => {
    return playerPosition === p;
  });

  return _lodash.default.keys(POSITIONS)[(positionIndex + playerPositionIndex) % 4];
};

exports.tablePositionToPosition = tablePositionToPosition;