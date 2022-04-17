import React, { useContext } from "react";
import { CarHistory } from "./CarHistory";
import { GlobalContext } from "../context/GlobalState";

export const History = () => {
  const { fuelingExpenses } = useContext(GlobalContext);

  return (
    <div className="d-flex flex-column align-items-center text-center w-100">
      <h3>History of cars</h3>
      <div>
        {fuelingExpenses.map((fuelingExpenses) => (
          <CarHistory
            key={fuelingExpenses.carName}
            fuelingExpenses={fuelingExpenses}
          />
        ))}
      </div>
    </div>
  );
};
