import React from "react";
import { _ } from "lodash";
import { isCardAllowedToPlay } from '/imports/lib/isCardAllowedToPlay';
export const getCardImage = function ({ suit, value, hidden }) {
  if (hidden) return `/cards/Blue_Back.svg`;
  const mapCardValueToSymbol = {
    11: "J",
    12: "Q",
    13: "K",
    14: "A",
  };
  //TODO : this is essential, as this declars how colours are mapped to numbers
  // and will be used in all rendereds ( like export ). Move it to common place.
  const mapSuitToSymbol = ["C", "D", "H", "S"];
  return `/cards/${mapCardValueToSymbol[value] || value}${
    mapSuitToSymbol[suit]
    }.svg`;
};

export const Card = function ({ card, playCard, G, ctx, hidden }) {
  const { suit, value } = card;
  return (
    <img
      className="card"
      onClick={() => {
        if (isCardAllowedToPlay({ G, card, ctx }))
          console.log("clicked", playCard(card));
      }}
      src={getCardImage({ suit, value, hidden })}
    />
  );
};
