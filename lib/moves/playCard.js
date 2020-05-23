import { _ } from 'lodash';
import { positionKey } from "/imports/lib/positions.js";

export const playCard = (G, ctx, card) => {
  //TODO check if card is allowed to play 
  let tricks = [...G.tricks];
  const lastTrick = _.last(tricks);
  const currentCard = { card, position: ctx.currentPlayer };
  if (lastTrick.length === 4) {
    tricks = [...tricks, [currentCard]];
  } else {
    tricks.pop();
    tricks = [...tricks, [...lastTrick, currentCard]]
  }
  return { ...G, tricks };
};


