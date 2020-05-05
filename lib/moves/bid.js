export const bid = function (G, ctx, bid) {
  console.log("big", bid);
  return { ...G, bidding: [...G.bidding, bid] };
};
