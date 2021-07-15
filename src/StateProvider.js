import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
//children is stuff wrapped in data layer in index.js like app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);