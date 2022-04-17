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
        <h3 className="card-title text-light">Total liters</h3>
        <p className="card-text text-light">{calculateTotal().liter} l</p>
      </div>
      <div className="card bg-dark text-center m-2">
        <h3 className="card-title text-light">Total price</h3>
        <p className="card-text text-light">{calculateTotal().price} €</p>
      </div>
      <div className="card bg-dark text-center m-2">
        <h3 className="card-title text-light">Total kilometers</h3>
        <p className="card-text text-light">{calculateTotal().kilometer} km</p>
      </div>
    </div>
  );
};
