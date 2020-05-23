import React from "react";
import { Card } from "../Card";

export const Hand = ({ position, hand, playCard, G, ctx }) => {
  const className = `hand hhand-compact active-hand ${position}-hand`;

  return (
    <div className={className}>
      {hand.map((card, i) => {
        const key = `card_${i}`;
        return <Card key={key} card={card} playCard={playCard} G={G} ctx={ctx} />;
      })}
    </div>
  );
};
