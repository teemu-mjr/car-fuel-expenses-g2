import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FuelingExpense } from "./FuelingExpense";

export const History = () => {
  const { fuelingExpenses } = useContext(GlobalContext);

  const mergeExpenses = (obj, itemToAdd) => {
    obj[itemToAdd.carName].price += itemToAdd.price;
    obj[itemToAdd.carName].kilometer += itemToAdd.kilometer;
    obj[itemToAdd.carName].liter += itemToAdd.liter;

    return obj;
  };

  const arrayHashmap = fuelingExpenses.reduce((obj, item) => {
    obj[item.carName]
      ? (obj = mergeExpenses(obj, item))
      : (obj[item.carName] = { ...item });
    return obj;
  }, {});

  const carHistory = Object.values(arrayHashmap);

  return (
    <div className="vw-90">
      <h1>History</h1>
      <div>
        {carHistory.map((fuelingExpenses) => (
          <FuelingExpense
            key={fuelingExpenses.carName}
            fuelingExpenses={fuelingExpenses}
            deleteKey={fuelingExpenses.carName}
          />
        ))}
      </div>
    </div>
  );
};
