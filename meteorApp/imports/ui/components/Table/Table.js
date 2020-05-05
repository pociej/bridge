import { Client } from "boardgame.io/react";
import { BridgeDealFactory, TicTacToe } from "/imports/lib/bridge.js";
import { Local } from "boardgame.io/multiplayer";
import { Hand } from "../Hand";
import { Bidding } from "../Bidding";
import React from "react";
import { positionKey } from "/imports/lib/positions.js";
const BridgeTable = function (props) {
  const position = positionKey[props.playerID];
  const isCurrenPlayerBidding = props.playerID === props.ctx.currentPlayer;
  return (
    <div>
      <Hand hand={props.G.deal[position]} />
      {isCurrenPlayerBidding ? (
        <Bidding
          position={position}
          G={props.G}
          makeBid={function (G, ctx, bid) {
            props.moves.bid(G, ctx, bid);
            props.events.endTurn();
          }}
          ctx={props.ctx}
        ></Bidding>
      ) : (
        ""
      )}
    </div>
  );
};

export const Table = (props) => {
  const BridgeClient = Client({
    game: BridgeDealFactory({ vulnerability: "NS" }),
    board: BridgeTable.bind(this),
    numPlayers: 4,
    multiplayer: Local(),
  });
  return (
    <div id="table">
      <BridgeClient gameID="123" playerID="0" />
      <BridgeClient gameID="123" playerID="1" />
      <BridgeClient gameID="123" playerID="2" />
      <BridgeClient gameID="123" playerID="3" />
    </div>
  );
};
