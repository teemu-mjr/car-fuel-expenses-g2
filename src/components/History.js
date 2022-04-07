import React, { useContext } from "react";
import { CarHistory } from "./CarHistory";
import { GlobalContext } from "../context/GlobalState";

export const History = () => {
  const { fuelingExpenses } = useContext(GlobalContext);

  return (
    <div className="History">
      <h3>History of cars</h3>
      <ul className="list">
        {fuelingExpenses.map((fuelingExpenses) => (
          <CarHistory
            key={fuelingExpenses.id}
            fuelingExpenses={fuelingExpenses}
          />
        ))}
      </ul>
    </div>
  );
};
