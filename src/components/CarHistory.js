import React from "react";

export const CarHistory = ({ fuelingExpenses }) => {
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
    </li>
  );
};
