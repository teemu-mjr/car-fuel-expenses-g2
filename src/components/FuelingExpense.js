import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const FuelingExpense = ({ fuelingExpenses, byName = false }) => {
  const { deleteExpense, deleteExpenseByName } = useContext(GlobalContext);

  return (
    <div className="card bg-dark m-3">
      <div className="d-flex justify-content-around card-header">
        <p className="text-info">{fuelingExpenses.carName}</p>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <p>Price: </p>
          <p className="text-info">{fuelingExpenses.price}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Kilometers: </p>
          <p className="text-info">{fuelingExpenses.kilometer}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Liters: </p>
          <p className="text-info">{fuelingExpenses.liter}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Km/L: </p>
          <p className="text-info">
            {(fuelingExpenses.kilometer / fuelingExpenses.liter).toFixed(2)}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Price/Km: </p>
          <p className="text-info">
            {(fuelingExpenses.price / fuelingExpenses.kilometer).toFixed(4)}
          </p>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (!byName) {
              deleteExpense(fuelingExpenses.id);
            } else {
              deleteExpenseByName(fuelingExpenses.carName);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
