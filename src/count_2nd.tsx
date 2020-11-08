import * as React from "react";
import { StateContext } from "./app";

export const Count_2nd = () => {
  const context = React.useContext(StateContext);
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return <div style={style}>count_2nd: {context.count_2nd}</div>;
};
