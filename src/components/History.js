import React from "react";
import { CarHistory } from "./CarHistory";

export const History = () => {
  return (
    <div className="History">
      <h3>History of cars</h3>
      <ul className="HistoryList">
        <li>
          <CarHistory km={100} liter={100} price={10} />
        </li>
      </ul>
    </div>
  );
};
