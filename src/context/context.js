import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
const initialState = [];

export const CFOContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  return (
    <CFOContext.Provider value={{ appName: "C.F.O" }}>
      {children}
    </CFOContext.Provider>
  );
};
