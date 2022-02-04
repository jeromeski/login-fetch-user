import { createContext, useContext, useReducer } from "react";

export const Context = createContext(AppStateProvider);

function AppStateProvider({ reducer, initialState = {}, children }) {
  const value = useReducer(reducer, initialState);
  return (
    <Context.Provider value={value} children={children}>
      {children}
    </Context.Provider>
  );
}

export default AppStateProvider;

export function useAppState() {
  return useContext(Context);
}
