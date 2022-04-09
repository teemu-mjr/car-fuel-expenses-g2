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
      {fuelingExpenses.kilometers + " km"}
      <br></br>
      {fuelingExpenses.liters + " l"}
      <br></br>
      {fuelingExpenses.kilometers / fuelingExpenses.liters + " km/l"}
      <br></br>
      {fuelingExpenses.price / fuelingExpenses.kilometers + " €/km"}
      <button onClick={() => deleteExpense(fuelingExpenses.id)}>Delete</button>
    </li>
  );
};
