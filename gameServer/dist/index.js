"use strict";

var _server = require("boardgame.io/server");

var _bridge = require("./lib/bridge.js");

var _cors = _interopRequireDefault(require("@koa/cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//for now in memory
const board = (0, _bridge.BridgeDealFactory)();
const server = (0, _server.Server)({
  games: [board] // db: new FlatFile({
  //   dir: '/storage',
  //   logging: true
  // }),

});
server.app.use((0, _cors.default)({
  origin: true
}));
server.run(process.env.PORT);