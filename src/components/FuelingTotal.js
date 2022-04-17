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
    <div className="d-flex flex-row">
      <div className="card bg-dark text-center m-2">
        <div className="card-header text-light">Total liters</div>
        <p className="card-text text-light">{calculateTotal().liter} l</p>
      </div>
      <div className="card bg-dark text-center m-2">
        <div className="card-header text-light">Total price</div>
        <p className="card-text text-light">{calculateTotal().price} €</p>
      </div>
      <div className="card bg-dark text-center m-2">
        <div className="card-header text-light">Total kilometers</div>
        <p className="card-text text-light">{calculateTotal().kilometer} km</p>
      </div>
    </div>
  );
};
