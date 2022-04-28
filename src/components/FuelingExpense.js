import React, { useContext } from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

export const FuelingExpense = ({ fuelingExpenses, byName = false }) => {
  const { deleteExpense, deleteExpenseByName } = useContext(GlobalContext);

  return (
    <Card border="light" bg="dark" className="m-3">
      <Card.Header>
        <p className="text-info">{fuelingExpenses.carName}</p>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <p>Price</p>
            </Col>
            <Col>
              <p className="text-info">{fuelingExpenses.price} €</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p>Kilometers</p>
            </Col>
            <Col>
            <p className="text-info">{fuelingExpenses.kilometer} km</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p>Liters</p>
            </Col>
            <Col>
            <p className="text-info">{fuelingExpenses.liter} L</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p>Gas price</p>
            </Col>
            <Col>
            <p className="text-info">{(fuelingExpenses.price / fuelingExpenses.liter).toFixed(2)} €</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p>L/100km</p>
            </Col>
            <Col>
            <p className="text-info">
              {((fuelingExpenses.liter / fuelingExpenses.kilometer * 100)).toFixed(2)} L
            </p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p>€/100km</p>
            </Col>
            <Col>
            <p className="text-info">
              {(fuelingExpenses.price / fuelingExpenses.kilometer * 100).toFixed(2)} €
            </p>
            </Col>
          </Row>
          <Button variant="outline-danger"
            onClick={() => {
              if (!byName) {
                deleteExpense(fuelingExpenses.id);
              } else {
                deleteExpenseByName(fuelingExpenses.carName);
              }
            }}
          >
            Delete
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
};
