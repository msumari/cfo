import React, { useReducer, createContext } from "react";
const initialState = [];

export const CFOContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CFOContext.Provider value={{ appName: "C.F.O" }}>
      {children}
    </CFOContext.Provider>
  );
};
