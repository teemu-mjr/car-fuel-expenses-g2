import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

export const AddExpense = () => {
  const [liter, setLiter] = useState("");
  const [price, setPrice] = useState("");
  const [kilometer, setKilometer] = useState("");
  const [carName, setCarName] = useState("");

  const { createExpense } = useContext(GlobalContext);

  const validateForm = () => {
    if (
      parseFloat(liter) > 0 &&
      parseFloat(price) > 0 &&
      parseFloat(kilometer) > 0
    ) {
      return true;
    } else return false;
  };

  const submitForm = () => {
    if (!validateForm()) {
      alert("Check the input you gave");
      return;
    }
    const newExpence = {
      id: uuid(),
      liter: +liter,
      price: +price,
      kilometer: +kilometer,
      carName,
    };

    createExpense(newExpence);

    clearFields();
  };

  const clearFields = () => {
    setLiter("");
    setPrice("");
    setKilometer("");
    setCarName("");
  };

  return (
    <div>
      <h1 className="text-center">Add a new expense</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Car name
        </span>
        <input
          type="text"
          className="form-control"
          aria-describedby="basic-addon1"
          value={carName}
          onChange={(e) => {
            setCarName(e.target.value);
          }}
        ></input>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Liters
        </span>
        <input
          type="text"
          className="form-control"
          aria-describedby="basic-addon1"
          value={liter}
          onChange={(e) => {
            setLiter(e.target.value);
          }}
        ></input>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Price
        </span>
        <input
          type="text"
          className="form-control"
          aria-describedby="basic-addon1"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <span className="input-group-text">€</span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Kilometers
        </span>
        <input
          type="text"
          className="form-control"
          aria-describedby="basic-addon1"
          value={kilometer}
          onChange={(e) => {
            setKilometer(e.target.value);
          }}
        ></input>
      </div>
      <div className="d-flex w-100">
        <button onClick={() => clearFields()} className="btn btn-light w-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-eraser-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z" />
          </svg>{" "}
          clear
        </button>
        <button onClick={() => submitForm()} className="btn btn-primary w-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>{" "}
          add
        </button>
      </div>
    </div>
  );
};
