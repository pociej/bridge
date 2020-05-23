import { Client } from "boardgame.io/react";
import { BridgeDealFactory, TicTacToe } from "/imports/lib/bridge.js";
import { Local } from "boardgame.io/multiplayer";
import { useTracker } from "meteor/react-meteor-data";
import { Hand } from "../Hand";
import { Bidding } from "../Bidding";
import React from "react";
import { positionKey } from "/imports/lib/positions.js";
import { PHASE_BIDDING, PHASE_DECLARE } from "/imports/lib/phases.js";
import { _ } from "lodash";
import { Tables } from "/imports/api/Tables";
import { TableBoards, gerDeal } from "/imports/api/Boards";
import { getNewTableBoard } from "/imports/api/Tables";
import { useParams } from "react-router-dom";

const BridgeTable = function ({ G, ctx, playerID, moves, events }) {
  const position = positionKey[playerID];
  const isCurrenPlayerBidding =
    ctx.phase === PHASE_BIDDING && playerID === ctx.currentPlayer;
  const playCard = moves.playCard || function () { };

  return (
    <div>
      <Hand
        position={position}
        hand={G.deal[position]}
        playCard={
          ctx.phase === PHASE_DECLARE
            ? function (card) {
              moves.playCard(card);
            }
            : (G, ctx) => { }
        }
      />
      {isCurrenPlayerBidding ? (
        <Bidding
          position={position}
          G={G}
          makeBid={function (bid) {

            moves.bid(bid);

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
  const { tableId } = useParams();
  const { table, boards, isTableLoading } = useTracker(() => {
    const sub = Meteor.subscribe("oneTable", { tableId });
    return {
      isTableLoading: !sub.ready(),
      table: Tables.findOne(tableId),
      boards: TableBoards.find({ tableId }),
    };
  });

  // ./

  // return <div>HERE IS THE TABL {isTableLoading} </div>;
  const BridgeClient = Client({
    game: BridgeDealFactory({ vulnerability: "NS" }),
    board: BridgeTable.bind(this),
    numPlayers: 4,
    multiplayer: Local(),
  });
  return (
    <div id="table">
      <div class="ui three column grid">
        <div class="row">
          <div class="column"></div>
          <div class="column"> <BridgeClient gameID="123" playerID="0" /></div>
          <div class="column"></div>
        </div>
        <div class="row">
          <div class="column"><BridgeClient gameID="123" playerID="3" /></div>
          <div class="column"></div>
          <div class="column"><BridgeClient gameID="123" playerID="1" /></div>
        </div>
        <div class="row">
          <div class="column"></div>
          <div class="column"><BridgeClient gameID="123" playerID="2" /></div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  );
};
