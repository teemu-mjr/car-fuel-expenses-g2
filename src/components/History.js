import React, { useContext } from "react";
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
    <div
      style={{ minWidth: "200px", maxWidth: "400px", width: "30vw" }}
      className="d-flex flex-column justify-content-center text-center"
    >
      <h1>History</h1>
      <div>
        {carHistory.map((expense) => (
          <FuelingExpense
            key={expense.id}
            fuelingExpenses={expense}
            byName={true}
          />
        ))}
      </div>
    </div>
  );
};
