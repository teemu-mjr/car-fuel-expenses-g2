import React, { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";

const initialState = {
  fuelingExpenses: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // actions
  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  const deleteExpenseByName = (carName) => {
    dispatch({
      type: "DELETE_EXPENSE_BY_NAME",
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
        deleteExpenseByName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
