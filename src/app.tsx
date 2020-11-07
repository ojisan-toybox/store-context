import * as React from "react";
import { AppChild } from "./children";

type storeType = {
  userNames: Array<string>;
  count: number;
};

export const StateContext = React.createContext<storeType>({
  userNames: [],
  count: 0,
});

export const App = () => {
  const [state, setState] = React.useState<storeType>({
    userNames: [],
    count: 0,
  });

  return (
    <StateContext.Provider value={state}>
      <AppChild></AppChild>
    </StateContext.Provider>
  );
};
