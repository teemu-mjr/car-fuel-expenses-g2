import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const CarHistory = ({ fuelingExpenses }) => {
  const { deleteExpense } = useContext(GlobalContext);

  return (
    <div className="card bg-dark m-3">
      <div className="card-header">{fuelingExpenses.carName}</div>
      <div className="card-body">
        <p>{fuelingExpenses.price + " €"}</p>
        <p>{fuelingExpenses.kilometer + " km"}</p>
        <p>{fuelingExpenses.liter + " l"}</p>
        <p>
          {(fuelingExpenses.kilometer / fuelingExpenses.liter).toFixed(2) +
            " km/l"}
        </p>
        <p>
          {(fuelingExpenses.price / fuelingExpenses.kilometer).toFixed(4) +
            " €/km"}
        </p>
        <button
          className="btn btn-danger"
          onClick={() => deleteExpense(fuelingExpenses.carName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
