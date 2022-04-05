import React from "react";

function CarHistory({ price, liter, km }) {
  return (
    <div className="CarHistory">
      <div>
        Car name
        {price} €{liter}liters
        {km} kilometers
        {price / km} €/km
        {liter / km} l/km
      </div>
    </div>
  );
}

export default CarHistory;
