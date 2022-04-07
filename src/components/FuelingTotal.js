import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const FuelingTotal = () => {
  const { fuelingTotal } = useContext(GlobalContext);

  return (
    <div className="FuelingTotal">
      <h1>Fueling total</h1>
      <h3>{fuelingTotal.liters} l</h3>
      <h3>{fuelingTotal.price} €</h3>
      <h3>{fuelingTotal.kilometers} km</h3>
    </div>
  );
};
