import React, { useState } from "react";

export const AddExpense = () => {
  const [liter, setLiter] = useState(0);
  const [price, setPrice] = useState(0);
  const [kilometer, setKilometer] = useState(0);
  const [carName, setCarName] = useState("");

  return (
    <div className="AddExpense">
      <h1>Add a new expense</h1>
      <form className="AddExpenseForm">
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
