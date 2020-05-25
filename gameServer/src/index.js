import { Server, FlatFile } from 'boardgame.io/server';
import { BridgeDealFactory } from './lib/bridge.js';

import cors from '@koa/cors';
//for now in memory
const board = BridgeDealFactory();
const server = Server({
  games: [board],
  // db: new FlatFile({
  //   dir: '/storage',
  //   logging: true
  // }),
});

server.app.use(cors({ origin: true }));
server.run(process.env.PORT);
