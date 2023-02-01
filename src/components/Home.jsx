import React, { useEffect } from "react";
import propertiesService from "../services/properties";
import CardProperty from "./CardProperty";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PropertiesContext from "../context/PropertiesProvider";
import userServices from "../services/users";
import PropertyList from "./PropertiesView/PropertyList";



export default function Home() {
  const [properties, setProperties] = React.useState([]);

  const { user, setUser } = React.useContext(PropertiesContext);

  useEffect(() => {
    propertiesService.getAll().then((response) => {
      setProperties(response);
    });
  }, []);



  return (
    <Container>
      <h1>Welcome Home</h1>
      <PropertyList properties={properties}/>
    </Container>
  );
}
