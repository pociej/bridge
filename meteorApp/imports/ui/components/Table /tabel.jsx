import { Client } from "boardgame.io/react";
import { Bride } from "/imports/lib/bridge.js";

export const Table = ({}) => {
  const CmClient = Client({
    game: Transition,
    board: TransitionBoard,
    numPlayers: 1,
    enhancer: applyMiddleware(middleware(props.playerId)),
    // multiplayer: { server: '178.128.155.17' },
    multiplayer: { local: true },
    // multiplayer: { server: 'localhost:3030' },
  });
};
