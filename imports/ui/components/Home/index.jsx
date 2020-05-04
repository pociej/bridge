import React from "react";
import { useStore } from "react-redux";

export const Home = function (props) {
  const store = useStore();
  return (
    <div>
      {" "}
      <h1>Home page</h1>{" "}
    </div>
  );
};
