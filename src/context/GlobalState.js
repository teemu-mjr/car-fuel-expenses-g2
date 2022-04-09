import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  fuelingExpenses: [
    { id: 1, liters: 10, price: 20, kilometers: 100, carName: "BMW" },
    { id: 2, liters: 12, price: 53, kilometers: 134, carName: "VW" },
    { id: 3, liters: 50, price: 12, kilometers: 634, carName: "FIAT" },
    { id: 4, liters: 32, price: 54, kilometers: 123, carName: "LADA" },
  ],
  fuelingTotal: { liters: 10, price: 20, kilometers: 100 },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  const addExpense = (expense) => {
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
        addExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
