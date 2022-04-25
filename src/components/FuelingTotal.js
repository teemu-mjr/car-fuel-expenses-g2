import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const FuelingTotal = () => {
  const { fuelingExpenses } = useContext(GlobalContext);

  const calculateTotal = () => {
    let liter = 0;
    let price = 0;
    let kilometer = 0;
    for (let i = 0; i < fuelingExpenses.length; i++) {
      liter += fuelingExpenses[i].liter;
      price += fuelingExpenses[i].price;
      kilometer += fuelingExpenses[i].kilometer;
    }

    return { liter, price, kilometer };
  };

  return (
    <div>
      <div className="d-flex justify-content-center flex-row">
        <div className="card bg-dark text-center m-2">
          <div className="card-header text-light">Total liters</div>
          <p className="card-text text-info">{calculateTotal().liter} </p>
        </div>
        <div className="card bg-dark text-center m-2">
          <div className="card-header text-light">Total price</div>
          <p className="card-text text-info">{calculateTotal().price} €</p>
        </div>
        <div className="card bg-dark text-center m-2">
          <div className="card-header text-light">Total kilometers</div>
          <p className="card-text text-info">{calculateTotal().kilometer} km</p>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-row">
        <div className="card bg-dark text-center m-2">
          <div className="card-header text-light">Average Km/l</div>
          <p className="card-text text-info">
            {(calculateTotal().kilometer / calculateTotal().liter).toFixed(2)}
          </p>
        </div>
        <div className="card bg-dark text-center m-2">
          <div className="card-header text-light">Average €/l</div>
          <p className="card-text text-info">
            {(calculateTotal().price / calculateTotal().liter).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
