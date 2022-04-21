import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Fueling tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/add">Add</Nav.Link>
          <Nav.Link href="/history">History</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
