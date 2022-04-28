import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

export const FuelingTotal = () => {
  const { fuelingExpenses } = useContext(GlobalContext);

  const calculateTotal = () => {
    let liter = 0;
    let price = 0;
    let kilometer = 0;
    for (let i = 0; i < fuelingExpenses.length; i++) {
      liter += fuelingExpenses[i].liter;
      price += fuelingExpenses[i].price;
      kilometer += fuelingExpenses[i].kilometer;
    }

    return { liter, price, kilometer };
  };

  return (
    <div>
      <div className="d-flex justify-content-center flex-row">
        <Card bg="dark" className="text-center m-2">
          <Card.Header>Total liters</Card.Header>
          <Card.Text className="text-info">{calculateTotal().liter} </Card.Text>
        </Card>
        <Card bg="dark" className="text-center m-2">
          <Card.Header className="text-light">Total price</Card.Header>
          <Card.Text className="text-info">{calculateTotal().price} €</Card.Text>
        </Card>
        <Card bg="dark" className="text-center m-2">
          <Card.Header className="text-light">Total kilometers</Card.Header>
          <Card.Text className="text-info">{calculateTotal().kilometer} km</Card.Text>
        </Card>
      </div>
      <div className="d-flex justify-content-center flex-row">
        <Card bg="dark" className="text-center m-2">
          <Card.Header className="text-light">Average L/100km</Card.Header>
          <Card.Text className="text-info">
            {((calculateTotal().liter / calculateTotal().kilometer * 100)).toFixed(2)} L
          </Card.Text>
        </Card>
        <Card bg="dark" className="text-center m-2">
          <Card.Header className="text-light">Avg price per liter</Card.Header>
          <Card.Text className="text-info">
            {(calculateTotal().price / calculateTotal().liter).toFixed(2)} €
          </Card.Text>
        </Card>
        <Card bg="dark" className="text-center m-2">
          <Card.Header className="text-light">Avg price per 100km</Card.Header>
          <Card.Text className="text-info">
            {(calculateTotal().price / calculateTotal().kilometer * 100).toFixed(2)} €
          </Card.Text>
        </Card>
      </div>
    </div>
  );
};
