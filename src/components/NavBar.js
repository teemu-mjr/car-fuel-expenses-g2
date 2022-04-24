import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Fueling tracker
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/log">
            Log
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
