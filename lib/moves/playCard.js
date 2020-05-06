export const playCard = (G, ctx, card) => {
  console.log("card", card);
  const trick = [...G.trick, card];
  return { ...G, trick };
};
