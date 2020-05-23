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
import { BiddingView } from "../BiddingView"

const BridgeHand = function ({ G, ctx, playerID, moves, events }) {
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
    </div>
  );
};

export const Table = (props) => {
  const { tableId } = useParams();
  const { G, ctx, playerID, moves, events } = props;
  const position = positionKey[playerID];
  const { table, boards, isTableLoading } = useTracker(() => {
    const sub = Meteor.subscribe("oneTable", { tableId });
    return {
      isTableLoading: !sub.ready(),
      table: Tables.findOne(tableId),
      boards: TableBoards.find({ tableId }),
    };
  });
  const renderBidding = () => {
    return (
      <div className="ui three column grid">
        <div className="row">
          <div className="column"></div>
        </div>
        <div className="row">
          <div className="two wide column"></div>
          <div className="twelve wide column">
            <Bidding
              position={position}
              G={G}
              makeBid={function (bid) {
                moves.bid(bid);
              }}
              ctx={ctx}
            ></Bidding>
          </div>
          <div className="two wide column"></div>
        </div>
        <div className="row">
          <div className="sixteen wide column">
            <BiddingView bids={[{
              bid: "PASS"
            },{
              level:2,
              suit:0
            },
            {
              level:3,
              suit:1
            },
            {
              level:4,
              suit:2
            },
            {
              level:5,
              suit:3
            },
            {
              level:6,
              suit:4
            }

            ]}></BiddingView>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="table">
      <div className="ui three column grid">
        <div className="row">
          <div className="column"></div>
          <div className="column"><BridgeHand {...props} /></div>
          <div className="column"></div>
        </div>
        <div className="row">
          <div className="five wide column" style={{minHeight: '300px'}}></div>
          <div className="six wide column">
            {renderBidding()}
          </div>
          <div className="five wide column" style={{minHeight:'300px'}}></div>
        </div>
        <div className="row">
          <div className="column"></div>
          <div className="column"><BridgeHand {...props} /></div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
};


export const ClientTable = (props) => {
  const { tableId } = useParams();
  const BridgeClient = Client({
    game: BridgeDealFactory({ vulnerability: "NS" }),
    board: Table,
    numPlayers: 4,
    multiplayer: Local(),
  });

  return <BridgeClient gameID="123" playerID="2" />;
};
