import { Bridge } from './lib/bridge.js';
import { Server, Mongo } from 'boardgame.io/server';
const cors = require('@koa/cors');

//for now in memory 
const server = Server({
  games: [Bridge],
  // db: new Mongo({
  //   url: '',
  //   dbname: 'zz',
  // }),
});
server.run(3030);
server.app.use(cors({ origin: '*' }));
