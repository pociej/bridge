import { deal } from "./deal.js";

export const BridgeDealFactory = ({ vulnerability }) => {
  return {
    name: "bridgeDeal",
    setup: () => ({
      deal: deal(),
      vulnerability,
    }),
    moves: {
      clickCell: (G, ctx, id) => {
        G.cells[id] = ctx.currentPlayer;
      },
    },
  };
};

export const TicTacToe = {
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell: (G, ctx, id) => {
      G.cells[id] = ctx.currentPlayer;
    },
  },
};
