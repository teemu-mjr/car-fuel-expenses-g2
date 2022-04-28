import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FuelingLog } from "./components/FuelingLog";
import { FuelingTotal } from "./components/FuelingTotal";
import { AddExpense } from "./components/AddExpense";
import { NavBar } from "./components/NavBar";
import { History } from "./components/History";
import { GlobalProvider } from "./context/GlobalState";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <NavBar />
        <Container fluid className="App align-items-center">
          <Routes>
            <Route
              path="/"
              element={
                <Row className="justify-content-md-center">
                  <Col lg={4} md={true}>
                    <FuelingTotal />
                    <AddExpense />
                  </Col>
                  <Col lg={4} md={true}>
                    <History />
                  </Col>
                </Row>
              }
            ></Route>
            <Route
              path="/log"
              element={
                <Row className="justify-content-md-center">
                  <Col lg={5} md={true}>
                    <FuelingTotal />
                    <FuelingLog />
                  </Col>
                </Row>
              }
            ></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
