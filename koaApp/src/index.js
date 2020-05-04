import { Transition } from './lib/game.js';
import { Server, Mongo } from 'boardgame.io/server';
const cors = require('@koa/cors');
const server = Server({
  games: [Transition],

  db: new Mongo({
    url: 'mongodb://adminZZ:Mindlab12@ds131784.mlab.com:31784/zz',
    dbname: 'zz',
  }),
});
console.log('running server');
server.run(3030);
server.app.use(cors({ origin: '*' }));
