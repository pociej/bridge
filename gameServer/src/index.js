import { Server } from 'boardgame.io/server';
import { BridgeDealFactory } from '../imports/lib/bridge.js';
import cors from '@koa/cors';

//for now in memory
const server = Server({
  games: [BridgeDealFactory],
});

server.app.use(cors({ origin: '*' }));
server.run(process.env.PORT);
