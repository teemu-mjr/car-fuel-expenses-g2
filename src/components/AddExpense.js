import React from "react";

function AddExpense() {
  return (
    <div className="AddExpense">
      <h1>Add a new expense</h1>
      <div className="AddExpenseInputs">
        <input placeholder="Liters" />
        <input placeholder="€" />
        <input placeholder="km" />
        <input placeholder="car name" />
        <button>Add</button>
      </div>
    </div>
  );
}

export default AddExpense;
