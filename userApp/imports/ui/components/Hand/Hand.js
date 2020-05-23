import React from "react";
import { Card } from "../Card";
import _ from "lodash";

export const Hand = ({ position, hand, playCard }) => {
  const containerClassName = `hand hhand-compact active-hand ${position}-hand`;
  const rowClassName = `card-row card-row-${position}`;

  const groupedHand = _.groupBy(hand, (card) => card.suit);

  const renderSuit = (suit) => suit.map((card, i) => {
    const key = `card_${i}`;
    return <Card key={key} card={card} playCard={playCard} />;
  });

  return (
    <div className={containerClassName}>
      {position === 'S' || position === 'N' ?
        hand.map((card, i) => {
          const key = `card_${i}`;
          return <Card key={key} card={card} playCard={playCard} />;
        })
        :
        Object.values(groupedHand).reverse().map(suit => (
          <>
            <div className={rowClassName}>
              {renderSuit(suit)}
            </div>
            <br />
          </>
        ))
      }
    </div>
  );
};
