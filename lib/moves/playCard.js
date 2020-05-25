import { _ } from 'lodash';
import { getTrickWinner } from './getTrickWinner.js';
import { playerIdToPosition } from '../positions.js';
export const playCard = (G, ctx, card) => {
  //TODO check if card is allowed to play 
  const currentCard = { card, position: ctx.currentPlayer };

  //for some reason [...G.tricks] tdoesnt work here .... somthing with proxy i guess 
  let tricks = JSON.parse(JSON.stringify(G.tricks));
  let hands = JSON.parse(JSON.stringify(G.hands));
  let winner = '';
  let lastTrick = _.last(tricks);
  let next = null;

  let wasDummyPlaying = G.isDummyPlaying;
  let isDummyPlaying = false;

  let position = playerIdToPosition(next);
  if (position === G.dummy) {
    isDummyPlaying = true;
  }
  hands = _.keys(hands).reduce((result, hand) => {
    result[hand] = hands[hand].filter((c) => {
      return !(c.suit === card.suit && c.value === card.value)
    });
    return result;
  }, {});

  if (lastTrick.cards.length === 4) {
    tricks = [...tricks, { cards: [currentCard] }];
  } else {
    tricks.pop();
    lastTrick.cards = [...lastTrick.cards, currentCard];
    lastTrick.winner = getTrickWinner({ trick: lastTrick, trump: G.contract.suit });
    tricks = [...tricks, lastTrick]
  };

  lastTrick = _.last(tricks);
  if (lastTrick.cards.length < 4) {
    next = (ctx.playOrderPos + 1) % ctx.numPlayers;
  } else {
    next = Number(lastTrick.winner);
  };
  position = playerIdToPosition(next);
  if (position === G.dummy) {
    isDummyPlaying = true;
  }
  return { ...G, tricks, hands, isDummyPlaying, wasDummyPlaying };
};


