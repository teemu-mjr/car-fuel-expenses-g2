import React from "react";
import { AddExpenseForm } from "../components/AddExpenceForm"

export const AddExpense = () => {

  return (
    <div>
      <h1 className="text-center">Add a new expense</h1>
      <div className="w-100">
        <AddExpenseForm/>
      </div>
    </div>
  );
};
