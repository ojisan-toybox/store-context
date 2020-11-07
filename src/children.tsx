import * as React from "react";
import { StateContext } from "./app";

type storeType = {
  userNames: Array<string>;
  count: number;
};

export const AppChild = () => {
  const context = React.useContext(StateContext);

  return <div>count: {context.count}</div>;
};
