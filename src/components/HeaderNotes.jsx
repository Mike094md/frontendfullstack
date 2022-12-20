import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Outlet } from "react-router-dom";
// import NotesProvider from "../../context/NotesProvider";
import { useNavigate } from "react-router-dom";  
import PropertiesContext from "../context/PropertiesProvider";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";
import { MdPublish } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../imgs/icon-login10.png"
import Image from 'react-bootstrap/Image'
import imgprofile from "../imgs/img-profile2.jpg"
import Stack from 'react-bootstrap/Stack'
//TODO: Evitar que al recargar la pagina se pierda el usuario loggeado


export default function HeaderNotes() {
  const [key, setKey] = React.useState("/");
  const { user, setUser } = useContext(PropertiesContext);

  const styleLink = "d-flex align-items-center justify-content-start"
  const styleBrand = {
    fontFamily: "Oswald, sans-serif",
    fontWeight: "600",
    fontSize: "1.2rem",
  }
  
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
  
  };

  const handleSelect = (eventKey) => {
    setKey(eventKey);
  }


  return (
    <>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand style={styleBrand} href="/">
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-1"
              alt="React Bootstrap logo"
            />
        HomeFinder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav activeKey={key} onSelect={handleSelect}>
          <Nav.Link className={styleLink} href="/"><BsHouseDoor />Home</Nav.Link>
          <Nav.Link className={styleLink} href="#features"><MdOutlineRealEstateAgent />Comprar</Nav.Link>
          <Nav.Link className={styleLink} href="#pricing"><GiHouseKeys />Alquilar</Nav.Link>
          {user?.token && 
            <>
            <Nav.Link className={styleLink} href="/publicar_anuncio"><MdPublish />Publicar anuncio</Nav.Link>
            <Stack direction="horizontal" gap={1}>
            <NavDropdown className="justify-content-end" title={user.name} align="end"  size="sm" id="collasible-nav-dropdown">
              <NavDropdown.Item style={{fontSize: ".7rem"}} href="#action/3.1">Perfil</NavDropdown.Item>
              <NavDropdown.Item style={{fontSize: ".7rem"}} href="#action/3.2">
                Anuncios publicados
              </NavDropdown.Item>
              <NavDropdown.Item style={{fontSize: ".7rem"}} href="#action/3.3">Anuncios guardados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{fontSize: ".7rem"}} href="#action/3.4" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <Image src={imgprofile} alt="imgprofile" roundedCircle width="25" height="25" className="me-1" />
            </Stack>
            </>
          
          }
          {
            !user?.token && 
            <Nav.Link className={styleLink} href="/login">
              Login
            </Nav.Link>
          }

        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/ >
    </>
  );
}
