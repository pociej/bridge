export const playCard = (G, ctx, card) => {
  const trick = [...G.trick, card];
  return { ...G, trick };
};
