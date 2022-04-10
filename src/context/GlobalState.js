import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  fuelingExpenses: [],
  fuelingTotal: { liters: 0, price: 0, kilometers: 0 },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const deleteExpense = (carName) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: carName,
    });
  };

  const createExpense = (expense) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        fuelingExpenses: state.fuelingExpenses,
        fuelingTotal: state.fuelingTotal,
        deleteExpense,
        createExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
