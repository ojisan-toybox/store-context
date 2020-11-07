import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app";

type storeType = {
  userNames: Array<string>;
  count: number;
};

export const Context = React.createContext<storeType>({
  userNames: [],
  count: 0,
});

ReactDOM.render(
  <Context.Provider value={{ userNames: [], count: 0 }}>
    <App></App>
  </Context.Provider>,
  document.getElementById("root")
);
