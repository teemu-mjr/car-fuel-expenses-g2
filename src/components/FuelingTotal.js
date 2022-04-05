import React from "react";

export const FuelingTotal = ({ price, liter, km }) => {
  return (
    <div className="FuelingTotal">
      <h1>Fueling total</h1>
      <div>
        {price} €{liter}liters
        {km} kilometers
        {price / km} €/km
        {liter / km} l/km
      </div>
    </div>
  );
};
