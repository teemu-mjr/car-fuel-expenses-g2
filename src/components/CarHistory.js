import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const CarHistory = ({ fuelingExpenses }) => {
  const { deleteExpense } = useContext(GlobalContext);

  return (
    <li className="CarHistory">
      {fuelingExpenses.carName}
      <br></br>
      {fuelingExpenses.price + " €"}
      <br></br>
      {fuelingExpenses.kilometer + " km"}
      <br></br>
      {fuelingExpenses.liter + " l"}
      <br></br>
      {(fuelingExpenses.kilometer / fuelingExpenses.liter).toFixed(2) + " km/l"}
      <br></br>
      {(fuelingExpenses.price / fuelingExpenses.kilometer).toFixed(4) + " €/km"}
      <button onClick={() => deleteExpense(fuelingExpenses.carName)}>
        Delete
      </button>
    </li>
  );
};
