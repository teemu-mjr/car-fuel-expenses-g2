import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const FuelingTotal = () => {
  const { fuelingExpenses } = useContext(GlobalContext);

  const calculateTotal = () => {
    let liter = 0;
    let price = 0;
    let kilometer = 0;
    for (let i = 0; i < fuelingExpenses.length; i++) {
      liter += fuelingExpenses[0].liter;
      price += fuelingExpenses[0].price;
      kilometer += fuelingExpenses[0].kilometer;
    }

    return { liter, price, kilometer };
  };

  return (
    <div>
      <h1>Fueling total</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>{calculateTotal().liter} l</h3>
        <h3>{calculateTotal().price} €</h3>
        <h3>{calculateTotal().kilometer} km</h3>
      </div>
    </div>
  );
};
