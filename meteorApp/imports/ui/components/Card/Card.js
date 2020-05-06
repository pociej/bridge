import React from "react";
import { _ } from "lodash";
export const getCardImage = function ({ suit, value }) {
  const mapCardValueToSymbol = {
    11: "J",
    12: "Q",
    13: "K",
    14: "A",
  };
  //TODO : this is essential, as this declars how colours are mapped to numbers
  // and will be used in all rendereds ( like export ). Move it to common place.
  const mapSuitToSymbol = ["D", "C", "H", "S"];
  return `cards/${mapCardValueToSymbol[value] || value}${
    mapSuitToSymbol[suit]
  }.svg`;
};

export const Card = function ({ card, playCard }) {
  const { suit, value } = card;
  return (
    <img
      className="card"
      onClick={() => {
        console.log("clicked", playCard(card));
      }}
      src={getCardImage({ suit, value })}
    />
  );
};
