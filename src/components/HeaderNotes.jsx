import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import noteService from "../services/notes";
import { Outlet } from "react-router-dom";
// import NotesProvider from "../../context/NotesProvider";
import { useNavigate } from "react-router-dom";  
import PropertiesContext from "../context/PropertiesProvider";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";
import { MdAttachMoney,  MdPublish } from "react-icons/md";
// import logo from "../imgs/logo_HomeFinder.png"
//TODO: Evitar que al recargar la pagina se pierda el usuario loggeado


export default function HeaderNotes() {
  const { user, setUser } = useContext(PropertiesContext);

  const styleLink = "d-flex align-items-center"
  
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
  
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Inmuebes</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link className={styleLink} href="/login"><BsHouseDoor />Home</Nav.Link>
          <Nav.Link className={styleLink} href="#features"><MdOutlineRealEstateAgent />Comprar</Nav.Link>
          <Nav.Link className={styleLink} href="#pricing"><MdAttachMoney />   Vender</Nav.Link>
          {user?.token && 
            <>
            <Nav.Link className={styleLink} href="/publicar_anuncio"><MdPublish />Publicar anuncio</Nav.Link>
            <Button variant="outline-success" size="sm" onClick={handleLogout}>
              Logout
            </Button>
            </>
          
          }
          {
            !user?.token && 
            <Button variant="outline-success" size="sm" onClick={handleLogin}>
              Loging
            </Button>
          }

        </Nav>
      </Container>
    </Navbar>
    <Outlet/ >
    </>
  );
}
