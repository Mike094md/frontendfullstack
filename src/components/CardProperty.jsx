import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdEuroSymbol, MdOutlineFormatLineSpacing } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import userServices from "../services/users";
import PropertiesContext from "../context/PropertiesProvider";
import "../styles/css/cardProperty.css";

const CardProperty = ({ ...props }) => {
  const [showArrows, setShowArrows] = React.useState(false);
  const [indexImg, setIndexImg] = React.useState(0);
  const [gustado, setGustado] = React.useState(false);

  const { user, setUser } = useContext(PropertiesContext);

  
  //TODO: HAY QUE TENER EN CUENTA QUE ESTA PAGINA LA PUEDE VER UN USUARIO NO LOGGEADO
  useEffect(() => {

    async function getUser(id){
      const user = await userServices.getUser(id)
      setUser(user)
    }

    // SI NO SE HA LOGGEADO EL USUARIO, TAMPOCO HABRA userId EN EL LOCALSTORAGE
    if(!user){
      const userId = JSON.parse(window.localStorage.getItem("userId"))
      if(!userId) return
      getUser(userId)
      return
    }
    // SI EL USUARIO YA ESTA LOGGEADO, COMPROBAMOS SI YA LE HA DADO A GUSTADO A ESTA PROPIEDAD
    if (user?.liked?.length > 0 && user?.liked?.includes(props?.id)) {
      setGustado(true);
    }
  }, [user?.liked])
  
  function forwarImg() {
    if (indexImg < props.images.length - 1) {
      setIndexImg(indexImg + 1);
    } else {
      setIndexImg(0);
    }

  }

  function backwardImg() {
    if (indexImg > 0) {
      setIndexImg(indexImg - 1);
    } else {
      setIndexImg(props.images.length - 1);
    }
  }

  const imgsStyle = {
    backgroundImage: `url(${props.images[indexImg]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "5px 5px 0 0",
    height: "12rem",
  };

  const addLiked = async () => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    await userServices.addLiked({ propertyId: props.id }, token)
    .then(res => {
      console.log("RES ADD LIKED", res);
      setUser(res)
      // window.localStorage.setItem("loggedPropertyappUser", JSON.stringify(newUser))
      setGustado(true)
    })
    .catch(err => console.log(err))
  }

  const deleteLiked = () => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    userServices.deleteLiked({ propertyId: props.id }, token)
    .then(res => {
      console.log("DELETE LIKED", res);
      setUser(res)
      // window.localStorage.setItem("loggedPropertyappUser", JSON.stringify(newUser))
      setGustado(false)
    })
    .catch(err => console.log(err))

    
  }



  return (
    <Card
      style={{ height: "22rem", boxShadow: "0px 0px 10px #e5e5e5" }}
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <div style={imgsStyle} />
      {showArrows && (
        <>
          <MdOutlineArrowForwardIos
            onClick={forwarImg}
            className="arrow-img-forward"
          />
          <MdOutlineArrowBackIosNew
            onClick={backwardImg}
            className="arrow-img-backward"
          />
        </>
      )}
      <Card.Body style={{ userSelect: "none" }}>
        <Card.Title className="d-flex align-items-center">
          {props.price} <MdEuroSymbol />
        </Card.Title>
        <Card.Text>
          {props.type} en {props.address.nombreVia}, {props.address.localidad}
        </Card.Text>
        <Button variant="primary" size="sm">
          <MdOutlineMail className="mb-1" /> Contactar
        </Button>
        {
          user !== null &&
          (gustado ? <HiHeart className="heart-icon2" onClick={deleteLiked}/> : <HiOutlineHeart className="heart-icon" onClick={addLiked}/>)
          
        }

      </Card.Body>
    </Card>
  );
};

export default CardProperty;
