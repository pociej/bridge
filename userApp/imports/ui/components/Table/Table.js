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
  const position = _.keys(positionKey).find(key => {
    return positionKey[key] == playerID;
  })
  const isCurrenPlayerBidding =
    ctx.phase === PHASE_BIDDING && playerID === ctx.currentPlayer;
  return (
    <div>
      <Hand
        hand={G.hands[position]}
        G={G}
        ctx={ctx}
        position={position}
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
  // console.log("table", table);
  // return <div>HERE IS THE TABL {isTableLoading} </div>;
  const BridgeClient = Client({
    game: BridgeDealFactory(),
    board: BridgeTable.bind(this),
    numPlayers: 4,
    multiplayer: Local(),
  });
  return (
    <div id="table">
      <div className="ui three column grid">
        <div className="row">
          <div className="column"></div>
          <div className="column"> <BridgeClient gameID="123" playerID="0" /></div>
          <div className="column"></div>
        </div>
        <div className="row">
          <div className="column"><BridgeClient gameID="123" playerID="3" /></div>
          <div className="column"></div>
          <div className="column"><BridgeClient gameID="123" playerID="1" /></div>
        </div>
        <div className="row">
          <div className="column"></div>
          <div className="column"><BridgeClient gameID="123" playerID="2" /></div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
};
