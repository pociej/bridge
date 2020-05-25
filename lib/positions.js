import _ from "lodash";

export const POSITION_N = 'N';
export const POSITION_E = 'E';
export const POSITION_S = 'S';
export const POSITION_W = 'W';

export const POSITIONS = {
  N: "N",
  E: "E",
  S: "S",
  W: "W",
};

//TODO : get rid of this 
export const positionKey = {
  "N": 0,
  "E": 1,
  "S": 2,
  "W": 3,
};

export const TABLE_POSITION_LHO = 'LHO';
export const TABLE_POSITION_RHO = 'RHO';
export const TABLE_POSITION_CHO = 'CHO';
export const TABLE_POSITION_PLAYER = 'PLAYER';

export const TABLE_POSITIONS = {
  PLAYER: TABLE_POSITION_PLAYER,
  LHO: TABLE_POSITION_LHO,
  CHO: TABLE_POSITION_CHO,
  RHO: TABLE_POSITION_RHO,
};

const pairs = [
  ["W", "E"],
  ["N", "S"],
];

export const arePartners = (p, r) => {
  return _.find(pairs, (pair) => {
    return _.xor(pair, [p, r]).length === 0;
  });
};

export const positionToPlayerId = (position) => {
  return positionKey[position];
};

export const playerIdToPosition = (playerId) => {
  return _.keys(positionKey).find(key => {
    return positionKey[key] == playerId;
  })
};

export const positionToTablePosition = (position, playerPosition) => {
  const getPositionIndex = pos => _.findIndex(_.keys(POSITIONS), p => {
    return p === pos;
  });
  const playerPositionIndex = getPositionIndex(playerPosition);
  const positionIndex = getPositionIndex(position);
  return _.keys(TABLE_POSITIONS)[(4 + positionIndex - playerPositionIndex) % 4];
};

export const tablePositionToPosition = (position, playerPosition) => {
  const positionIndex = _.findIndex(_.keys(TABLE_POSITIONS), p => {
    return position === p;
  });
  const playerPositionIndex = _.findIndex(_.keys(POSITIONS), p => {
    return playerPosition === p;
  });
  return _.keys(POSITIONS)[(positionIndex + playerPositionIndex) % 4];
}