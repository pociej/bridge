import { Client } from "boardgame.io/react";
import { BridgeDealFactory, TicTacToe } from "/imports/lib/bridge.js";
import { Local } from "boardgame.io/multiplayer";
import { useTracker } from "meteor/react-meteor-data";
import { Hand } from "../Hand";
import { BiddingBox, BiddingTable } from "../Bidding";
import React from "react";
import {
  playerIdToPosition,
  positionToPlayerId,
  tablePositionToPosition,
  TABLE_POSITIONS
} from "/imports/lib/positions.js";
import { PHASE_BIDDING, PHASE_DECLARE } from "/imports/lib/phases.js";
import { _ } from "lodash";
import { Tables } from "/imports/api/Tables";
import { TableBoards, gerDeal } from "/imports/api/Boards";
import { useParams } from "react-router-dom";
import { BOARD_STATES } from '/imports/constants/BoardStates.js';

const BridgeTable = function ({ G, ctx, playerID, moves, events }) {

  const playerPosition = playerIdToPosition(playerID);
  //for tests
  const isCurrenPlayerBidding =
    ctx.phase === PHASE_BIDDING && playerID === ctx.currentPlayer;


  return (
    <div className="ui three column grid">
      <div className="row">
        <div className="column"></div>
        <div className="column">
          <Hand
            ctx={ctx}
            G={G}
            tablePosition={TABLE_POSITIONS.CHO}
            position={tablePositionToPosition(TABLE_POSITIONS.CHO)}
            hand={G.hands[tablePositionToPosition(TABLE_POSITIONS.CHO)]}
            cardsHidden={true}
          />
        </div>
        <div className="column"></div>
      </div>
      <div className="row">
        <div className="column">
          <Hand
            ctx={ctx}
            G={G}
            tablePosition={TABLE_POSITIONS.LHO}
            position={tablePositionToPosition(TABLE_POSITIONS.LHO)}
            hand={G.hands[tablePositionToPosition(TABLE_POSITIONS.LHO)]}
            cardsHidden={true}
          />
        </div>
        <div className="column">
          <BiddingTable bidding={[...G.bidding]} dealer={G.dealer} />
        </div>
        <div className="column">
          <Hand
            ctx={ctx}
            G={G}
            tablePosition={TABLE_POSITIONS.RHO}
            position={tablePositionToPosition(TABLE_POSITIONS.RHO)}
            hand={G.hands[tablePositionToPosition(TABLE_POSITIONS.RHO)]}
            cardsHidden={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="column"></div>
        <div className="column">
          <div>
            {isCurrenPlayerBidding ? (
              <BiddingBox
                position={playerPosition}
                G={G}
                makeBid={function (bid) {
                  moves.bid(bid);
                }}
                ctx={ctx}
              ></BiddingBox>
            ) : (
                ""
              )}
            <Hand
              tablePosition={TABLE_POSITIONS.PLAYER}
              G={G}
              ctx={ctx}
              hand={G.hands[playerPosition]}
              position={playerPosition}
              playCard={
                ctx.phase === PHASE_DECLARE
                  ? function (card) {
                    moves.playCard(card);
                  }
                  : (G, ctx) => { }
              }
            />

          </div>
        </div>
        <div className="column"></div>
      </div>
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

  if (isTableLoading) {
    return ''
  } else {
    const playerPositionId = positionToPlayerId(table.players.find(player => {
      return player.username == Meteor.user().username;
    }).position);

    const currentBoard = table.getCurrentBoardId();
    console.log("current board", currentBoard);
    // console.log("pla", playerPositionId);

    return (
      <div id="table">
        <BridgeClient gameID="123" playerID="2" />
      </div>
    );
  }

};
