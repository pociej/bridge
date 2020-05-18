import { Tables } from "./Tables.js";
import { TableBoards, Boards } from "/imports/api/Boards";

//TODO think about better way if this leads to problems

Meteor.publishComposite("oneTable", function ({ tableId }) {
  console.log("tt", tableId);
  return [
    {
      find: function () {
        return Tables.find(tableId);
      },
    },
    {
      find: function () {
        return TableBoards.find({ tableId });
      },
      children: [
        {
          find(tableBoard) {
            return Boards.find({ _id: tableBoard.boardId });
          },
        },
      ],
    },
  ];
});
