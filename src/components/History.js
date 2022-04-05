import React from "react";
import CarHistory from "./CarHistory";

function History({ carHistoryList = [] }) {
  return (
    <div className="History">
      <h3>History of cars</h3>
      {carHistoryList.map((carHistory) => {
        return <CarHistory km={100} liter={100} price={10} />;
      })}
    </div>
  );
}

export default History;
