import React, { useEffect, useState } from "react";
import propertiesService from "../../services/properties";
import CardProperty from "../CardProperty";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PropertiesContext from "../../context/PropertiesProvider";
import userServices from "../../services/users";
import PropertyList from "../PropertiesView/PropertyList";
import CarouselImgs from "../CarouselImgs";
import "./Home.css";
import { GoSearch } from "react-icons/go";


export default function Home() {
  const [properties, setProperties] = React.useState([]);
  const [selectedOperation, setSelectedOperation] = useState("comprar");

  const { user, setUser } = React.useContext(PropertiesContext);

  useEffect(() => {
    propertiesService.getAll().then((response) => {
      setProperties(response);
    });
  }, []);



  return (
    <Container fluid className="p-0">
      <section className="background-img-home">
        <div className="searcher w-75 py-3 px-4">
          <p className="fs-5 fw-bold mb-1 ">Encuentra tu hogar</p>
          <div className="d-flex w-100 mt-4 justify-content-around">
            <div className="operation-radio-group">
              <input
                type="radio"
                id="comprar-operation"
                name="operation"
                value="comprar"
                checked={selectedOperation === "comprar"}
                onChange={(e) => setSelectedOperation(e.target.value)}
              />
              <label htmlFor="comprar-operation" className="radio-button radio-button-comprar">
                Comprar
              </label>
              <input
                type="radio"
                id="alquilar-operation"
                name="operation"
                value="alquilar"
                checked={selectedOperation === "alquilar"}
                onChange={(e) => setSelectedOperation(e.target.value)}
              />
              <label htmlFor="alquilar-operation" className="radio-button radio-button-alquilar">
                Alquilar
              </label>
            </div>
            <select className="type-property-select">
              <option value="1">Piso</option>
              <option value="2">Casa</option>
              <option value="3">Chalet</option>
            </select>
            <input type="text" placeholder="Ciudad, Provincia, barrio..." className="locality-input" />
            <button className="button-search"><GoSearch className="me-2"/>Buscar</button>
          </div>
        </div>
      </section>
    </Container>
  );
}
