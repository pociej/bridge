import { Client } from "boardgame.io/react";
import { BridgeDealFactory, TicTacToe } from "/imports/lib/bridge.js";
import { Local } from "boardgame.io/multiplayer";
import { Hand } from "../Hand";
import { Bidding } from "../Bidding";
import React from "react";
import { positionKey } from "/imports/lib/positions.js";
import { PHASE_BIDDING, PHASE_DECLARE } from "/imports/lib/phases.js";
import { _ } from "lodash";

const BridgeTable = function ({ G, ctx, playerID, moves, events }) {
  const position = positionKey[playerID];
  const isCurrenPlayerBidding =
    ctx.phase === PHASE_BIDDING && playerID === ctx.currentPlayer;
  const playCard = moves.playCard || function () {};
  console.log("is declare phase", PHASE_DECLARE, ctx.phase);
  return (
    <div>
      <Hand
        hand={G.deal[position]}
        playCard={
          ctx.phase === PHASE_DECLARE
            ? function (card) {
                console.log("KURWA TWOJA W TE I NA ZAD", moves);
                moves.playCard(card);
              }
            : (G, ctx) => {
                console.log("DUPA", G, ctx);
              }
        }
      />
      {isCurrenPlayerBidding ? (
        <Bidding
          position={position}
          G={G}
          makeBid={function (bid) {
            //
            moves.bid(bid);
            // try {
            // } catch (err) {
            //   console.log("DUPA");
            // }
          }}
          ctx={ctx}
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
