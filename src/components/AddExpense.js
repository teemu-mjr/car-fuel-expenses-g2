import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddExpense = () => {
  const [liter, setLiter] = useState("");
  const [price, setPrice] = useState("");
  const [kilometer, setKilometer] = useState("");
  const [carName, setCarName] = useState("");

  const { createExpense, deleteExpense, fuelingExpenses } =
    useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newExpence = {
      liter: +liter,
      price: +price,
      kilometer: +kilometer,
      carName,
    };

    if (fuelingExpenses.find((expense) => expense.carName === carName)) {
      let savedExpense = fuelingExpenses.find(
        (expense) => expense.carName === carName
      );
      deleteExpense(savedExpense.carName);
      savedExpense.liter += parseFloat(liter);
      savedExpense.price += parseFloat(price);
      savedExpense.kilometer += parseFloat(kilometer);
      createExpense(savedExpense);
    } else {
      createExpense(newExpence);
    }

    clearFields();
  };

  const clearFields = () => {
    setLiter("");
    setPrice("");
    setKilometer("");
    setCarName("");
  };

  return (
    <div className="AddExpense">
      <h1>Add a new expense</h1>
      <form onSubmit={onSubmit} className="AddExpenseForm">
        <label htmlFor="liters-input">Liters</label>
        <input
          type="number"
          id="liters-input"
          value={liter}
          onChange={(e) => {
            setLiter(e.target.value);
          }}
        />
        <label htmlFor="price-input">Price</label>
        <input
          type="number"
          id="price-input"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <label htmlFor="km-input">Kilometers</label>
        <input
          type="number"
          id="km-input"
          value={kilometer}
          onChange={(e) => {
            setKilometer(e.target.value);
          }}
        />
        <label htmlFor="car-name-input">Car Name</label>
        <input
          type="text"
          id="car-name-input"
          value={carName}
          onChange={(e) => {
            setCarName(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
};
