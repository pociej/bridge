import { Client } from "boardgame.io/react";
import { BridgeDealFactory, TicTacToe } from "/imports/lib/bridge.js";
import { Local } from "boardgame.io/multiplayer";
import { Hand } from "../Hand";
import React from "react";

const BridgeTable = function (props) {
  console.log("this", props);
  return <Hand hand={props.G.deal.E} />;
};

export const Table = (props) => {
  const BridgeClient = Client({
    game: BridgeDealFactory({ vulnerability: "NS" }),
    board: BridgeTable.bind(this),
    numPlayers: 1,
    multiplayer: Local(),
  });
  return (
    <div id="table">
      <BridgeClient gameID="123" playerID="0" />
    </div>
  );
};
