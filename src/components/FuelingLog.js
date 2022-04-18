import React, { useContext } from "react";
import { FuelingExpense } from "./FuelingExpense";
import { GlobalContext } from "../context/GlobalState";

export const FuelingLog = () => {
  const { fuelingExpenses } = useContext(GlobalContext);

  return (
    <div className="d-flex flex-column align-items-center text-center w-100">
      <h3>Fueling expenses log</h3>
      <div>
        {fuelingExpenses.map((fuelingExpenses) => (
          <FuelingExpense
            key={fuelingExpenses.id}
            fuelingExpenses={fuelingExpenses}
          />
        ))}
      </div>
    </div>
  );
};
