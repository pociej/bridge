import { _ } from 'lodash';
import { positionKey } from './positions.js';
export const isCardAllowedToPlay = ({ G, card, ctx }) => {
  const thisTrick = _.last(G.tricks);
  if (thisTrick.cards.length === 4) return true;
  const firstCardInCurrentTrick = _.first(_.get(thisTrick, 'cards'));
  //TODO : refactor hosuld be helper like , getCurrentPlayerPosition
  const position = _.find(_.keys(positionKey), (p) => {
    return positionKey[p] == ctx.currentPlayer;
  });
  const firstCardSuit = _.get(firstCardInCurrentTrick, 'card.suit', card.suit);
  const hasColor = _.find(G.hands[position], (card) => {
    return card.suit === firstCardSuit;
  });
  return !hasColor || firstCardSuit === card.suit;
}; 