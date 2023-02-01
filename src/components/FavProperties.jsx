import React, { useEffect } from "react";
import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import PropertyList from "./PropertiesView/PropertyList";
import PropertiesContext from "../context/PropertiesProvider";
import userService from "../services/users";
import Spinner from 'react-bootstrap/Spinner';


const FavProperties = () => {
  const { user, setUser } = useContext(PropertiesContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getUserEffect = async () => {
      const userId = JSON.parse(window.localStorage.getItem("userId"));
      console.log(userId);
      if (userId !== null) {
        userService
          .getLiked(userId)
          .then((response) => {
            console.log(response);
            setProperties(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    getUserEffect();
  }, [user.liked]);




  return (
    <Container>
      <h1>Favorites</h1>
      {
        properties.length === 0 ? <Spinner animation="border" /> :
        <PropertyList properties={properties} />
      }
    </Container>
  );
};

export default FavProperties;
