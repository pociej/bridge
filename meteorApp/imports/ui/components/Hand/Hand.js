import React from "react";
import { Card } from "../Card";

export const Hand = ({ hand }) => {
  console.log("hand", hand);
  return (
    <div className="hand hhand-compact active-hand">
      {hand.map((card, i) => {
        const key = `card_${i}`;
        return <Card key={key} card={card} />;
      })}
    </div>
  );
};
