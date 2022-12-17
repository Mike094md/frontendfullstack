import React, { useContext, useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import noteService from "../services/notes";
// import NotesProvider from "../../context/NotesProvider";
// import { useNavigate } from "react-router-dom";
// import NotesContext from "../../context/NotesProvider";

//TODO: Evitar que al recargar la pagina se pierda el usuario loggeado

export default function HeaderNotes({ handleLogout}) {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/login">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Button variant="outline-success" size="sm" onClick={handleLogout}>
          Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
