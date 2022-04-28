import React, { useContext } from "react";
import { FuelingExpense } from "./FuelingExpense";
import { GlobalContext } from "../context/GlobalState";

export const FuelingLog = () => {
  const { fuelingExpenses } = useContext(GlobalContext);

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <h1>Fueling expenses log</h1>
      {fuelingExpenses.length > 0 ? (
        <div style={{ minWidth: "200px", maxWidth: "500px", width: "50vw" }}>
          {fuelingExpenses.map((fuelingExpenses) => (
            <FuelingExpense
              key={fuelingExpenses.id}
              fuelingExpenses={fuelingExpenses}
            />
          ))}
        </div>
      ) : (
        <div className="card bg-dark m-3">
          <div className="card-body">
            <p>This is where all of you expenses are logged idividually.</p>
          </div>
        </div>
      )}
    </div>
  );
};
