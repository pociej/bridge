import React from "react";
import { Card } from "../Card";
import _ from "lodash";

import {
  TABLE_POSITIONS
} from "/imports/lib/positions.js";

export const Hand = ({ tablePosition, position, hand, cardsHidden, playCard, G, ctx }) => {
  const containerClassName = `hand hhand-compact active-hand ${tablePosition}-hand`;
  const rowClassName = `card-row card-row-${tablePosition}`;

  const groupedHand = _.groupBy(hand, (card) => cardsHidden ? _.findIndex(hand, (e) => {
    return e.suit === card.suit && e.value === card.value
  }) % 4 : card.suit);

  const renderSuit = (suit) => suit.map((card, i) => {
    const key = `card_${i}`;
    return <Card key={key} card={card} hidden={cardsHidden} playCard={playCard} G={G} ctx={ctx} />;
  });
  return (
    <div className={containerClassName}>
      {tablePosition === TABLE_POSITIONS.CHO || tablePosition === TABLE_POSITIONS.PLAYER ?
        hand.map((card, i) => {
          const key = `card_${i}`;
          return <Card key={key} card={card} hidden={cardsHidden} playCard={playCard} G={G} ctx={ctx} />;
        })
        :
        Object.values(groupedHand).reverse().map((suit, index) => (
          <React.Fragment key={`fragment_${index}`}>
            <div className={rowClassName}>
              {renderSuit(suit)}
            </div>
            <br />
          </React.Fragment>
        ))
      }
    </div>
  );
};