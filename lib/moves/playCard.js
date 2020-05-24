import { _ } from 'lodash';
import { getTrickWinner } from './getTrickWinner.js';

export const playCard = (G, ctx, card) => {
  //TODO check if card is allowed to play 

  //for some reason [...G.tricks] tdoesnt work here .... somthing with proxy i guess 
  let tricks = JSON.parse(JSON.stringify(G.tricks));
  let hands = JSON.parse(JSON.stringify(G.hands));
  hands = _.keys(hands).reduce((result, hand) => {
    result[hand] = hands[hand].filter((c) => {
      return !(c.suit === card.suit && c.value === card.value)
    });
    return result;
  }, {});
  console.log("hands", hands);
  let winner = '';
  const lastTrick = _.last(tricks);
  const currentCard = { card, position: ctx.currentPlayer };
  if (lastTrick.cards.length === 4) {
    tricks = [...tricks, { cards: [currentCard] }];
  } else {
    tricks.pop();
    lastTrick.cards = [...lastTrick.cards, currentCard];
    lastTrick.winner = getTrickWinner({ trick: lastTrick, trump: G.contract.suit });
    tricks = [...tricks, lastTrick]
  };

  return { ...G, tricks, hands };
};


