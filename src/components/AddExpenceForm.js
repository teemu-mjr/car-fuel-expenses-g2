import React,{ useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Col, InputGroup, Button, Container, Stack} from "react-bootstrap";
import { v4 as uuid } from "uuid";

export const AddExpenseForm = () => {
  const [liter, setLiter] = useState("");
  const [price, setPrice] = useState("");
  const [kilometer, setKilometer] = useState("");
  const [carName, setCarName] = useState("");

  const [validated, setValidated] = useState(false);

  const { createExpense } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);

    if (form.checkValidity() !== false) {
      const newExpence = {
        id: uuid(),
        carName: carName,
        liter: +liter,
        price: +price,
        kilometer: +kilometer,
      };

      createExpense(newExpence);

      clearFields()
    }
  };

  const clearFields = () => {
    setLiter("");
    setPrice("");
    setKilometer("");
    setCarName("");
    setValidated(false);
  };

  return (
  <Container>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Col className="mb-3">
        <Form.Group>
          <Form.Control
            required
            type="text"
            placeholder="Car name"
            value={carName}
            onChange={(e) => {
              setCarName(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group>
          <InputGroup hasValidation>
            <Form.Control
              required
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value)
              }}
            />
            <InputGroup.Text id="inputGroupPrepend">€</InputGroup.Text>
            <Form.Control.Feedback type="invalid">
              Input a valid price
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <InputGroup hasValidation>
            <Form.Control
              required
              type="number"
              placeholder="Kilometers"
              value={kilometer}
              onChange={(e) => {
                setKilometer(e.target.value)
              }}
            />
            <InputGroup.Text id="inputGroupPrepend">Km</InputGroup.Text>
            <Form.Control.Feedback type="invalid">
              Input a valid amount
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <InputGroup hasValidation>
            <Form.Control
              required
              type="number"
              placeholder="Liters"
              value={liter}
              onChange={(e) => {
                setLiter(e.target.value)
              }}
            />
            <InputGroup.Text>l</InputGroup.Text>
            <Form.Control.Feedback type="invalid">
              Input a valid amount
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Col>
    <Stack gap={2}>
      <Button variant="outline-info" type="submit">Add</Button>
      <Button variant="outline-secondary" onClick={() => {clearFields()}}>Clear</Button> 
    </Stack>
    </Form>
   </Container>
  );
}
