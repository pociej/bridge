import React from "react";
import { Card } from "../Card";

export const Hand = ({ position, hand }) => {
  const className = `hand hhand-compact active-hand ${position}-hand`;
  return (
    <div className={className}>
      {hand.map((card, i) => {
        const key = `card_${i}`;
        return <Card key={key} card={card} />;
      })}
    </div>
  );
};
