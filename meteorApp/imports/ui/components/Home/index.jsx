import React from "react";
import { useStore } from "react-redux";
import { Table } from "../Table/index.js";
export const Home = function (props) {
  const store = useStore();
  return (
    <div>
      {" "}
      <Table />
    </div>
  );
};
