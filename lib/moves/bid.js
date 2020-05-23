export const bid = function (G, ctx, bid) {
  return { ...G, bidding: [...G.bidding, bid] };
};
