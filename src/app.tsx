import * as React from "react";
import { Context } from "./index";

export const App = () => {
  const context = React.useContext(Context);
  return <div>count: {context.count}</div>;
};
