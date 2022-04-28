import React, { useContext } from "react";
import { FuelingExpense } from "./FuelingExpense";
import { GlobalContext } from "../context/GlobalState";
import { Card, Container } from "react-bootstrap";

export const FuelingLog = () => {
  const { fuelingExpenses } = useContext(GlobalContext);

  return (
    <Container className="align-items-center text-center">
      <h1>Fueling expenses log</h1>
      {fuelingExpenses.length > 0 ? (
        <div>
          {fuelingExpenses.map((fuelingExpenses) => (
            <FuelingExpense
              key={fuelingExpenses.id}
              fuelingExpenses={fuelingExpenses}
            />
          ))}
        </div>
      ) : (
        <Card bg="dark">
          <Card.Body>
            <p>This is where all of you expenses are logged idividually.</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};
