import { Client } from "boardgame.io/react";
import { BridgeDealFactory, TicTacToe } from "/imports/lib/bridge.js";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import { useTracker } from "meteor/react-meteor-data";
import { Hand } from "../Hand";
import { BiddingBox, BiddingTable } from "../Bidding";
import React from "react";
import {
  playerIdToPosition,
  positionToPlayerId,
  tablePositionToPosition,
  positionToTablePosition,
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
  console.log("F", G);

  const isDummmyVisible = ctx.phase === PHASE_DECLARE && G.tricks[0].cards.length > 0;
  const dummyTablePosition = positionToTablePosition(G.dummy, playerPosition);
  const isDummy = (p) => p === dummyTablePosition;
  const isVisibleAsDummy = p => (isDummy(p) && isDummmyVisible);
  return (
    <div className="ui three column grid">
      <div className="row">
        <div className="column"></div>
        <div className="column">
          {/* Sing with me boys, re-u-sa-bi-li-ty, TODO : get rid of redundancy below */}
          <Hand
            ctx={ctx}
            G={G}
            tablePosition={TABLE_POSITIONS.CHO}
            position={tablePositionToPosition(TABLE_POSITIONS.CHO, playerPosition)}
            hand={G.hands[tablePositionToPosition(TABLE_POSITIONS.CHO, playerPosition)]}
            cardsHidden={!isVisibleAsDummy(TABLE_POSITIONS.CHO)}
            playCard={
              function (card) {
                console.log("checking if dummy is playing", G.isDummyPlaying)
                if (G.isDummyPlaying && isVisibleAsDummy(TABLE_POSITIONS.CHO)) {
                  moves.playCard(card)
                }
              }
            }
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
            position={tablePositionToPosition(TABLE_POSITIONS.LHO, playerPosition)}
            hand={G.hands[tablePositionToPosition(TABLE_POSITIONS.LHO, playerPosition)]}
            cardsHidden={!isVisibleAsDummy(TABLE_POSITIONS.LHO)}
          />
        </div>
        <div className="column">
          <BiddingTable bidding={[...G.bidding]} dealer={G.dealer} isActive={ctx.phase === PHASE_BIDDING} />
        </div>
        <div className="column">
          <Hand
            ctx={ctx}
            G={G}
            tablePosition={TABLE_POSITIONS.RHO}
            position={tablePositionToPosition(TABLE_POSITIONS.RHO, playerPosition)}
            hand={G.hands[tablePositionToPosition(TABLE_POSITIONS.RHO, playerPosition)]}
            cardsHidden={!isVisibleAsDummy(TABLE_POSITIONS.RHO)}
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
                makeBid={moves.bid}
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
                (!G.isDummyPlaying && ctx.phase === PHASE_DECLARE) ? moves.playCard : (G, ctx) => { }
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
    multiplayer: SocketIO({ server: 'localhost:3010' }),
  });

  if (isTableLoading) {
    return ''
  } else {
    //temp 
    const urlParams = new URLSearchParams(window.location.search);
    const playerPositionId = positionToPlayerId(urlParams.get('position'));
    // const playerPositionId = positionToPlayerId(table.players.find(player => {
    //   return player.username == Meteor.user().username;
    // }).position);

    const currentBoard = urlParams.get('board');//table.getCurrentBoardId();
    // console.log("pla", playerPositionId);
    return (
      <div id="table">
        <BridgeClient gameID={currentBoard} playerID={playerPositionId.toString()} />
      </div>
    );
  }

};
