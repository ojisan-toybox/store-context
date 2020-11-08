import * as React from "react";
import { Count } from "./count";
import { Count_2nd } from "./count_2nd";

type storeType = {
  count: number;
  count_2nd: number;
};

export const StateContext = React.createContext<storeType>({
  count: 0,
  count_2nd: 0,
});

export const App = () => {
  const [state, setState] = React.useState<storeType>({
    count: 0,
    count_2nd: 0,
  });

  return (
    <StateContext.Provider value={state}>
      <Count></Count>
      <Count></Count>
      <Count></Count>
      <Count_2nd></Count_2nd>
      <Count_2nd></Count_2nd>
      <Count_2nd></Count_2nd>
      <button
        onClick={() => {
          setState({ ...state, count: state.count + 1 });
        }}
      >
        count up
      </button>
      <button
        onClick={() => {
          setState({ ...state, count_2nd: state.count_2nd + 1 });
        }}
      >
        count_2nd up
      </button>
    </StateContext.Provider>
  );
};
