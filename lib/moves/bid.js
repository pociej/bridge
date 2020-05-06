export const bid = function (G, ctx, bid) {
  // ctx.events.endTurn();
  return { ...G, bidding: [...G.bidding, bid] };
};
