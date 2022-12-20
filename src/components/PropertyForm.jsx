import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SwitchNumber from "./SwitchNumber";

export default function PropertyForm() {

  return (
    <Container>
      <Form className="my-4 w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h5 className="mb-3">Tipo de inmueble</h5>
          <Form.Select aria-label="Selecciona un tipo de inmueble">
            <option>Piso</option>
            <option>Chalet</option>
            <option>Garaje</option>
            <option>Terreno</option>
            <option>Oficina</option>
            <option>Trastero</option>
            <option>Local</option>
            <option>Plaza de garaje</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h5 className="mb-3">Operación</h5>
          <Form.Check
            type="radio"
            label="Alquiler"
            name="operacionRadio"
            id="AlquilerRadio"
          />
          <Form.Check
            type="radio"
            label="Venta"
            name="operacionRadio"
            id="VentaRadio"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h5 className="mb-3">Ubicación del inmueble</h5>
          <Form.Label>Localidad</Form.Label>
          <Form.Control className="mb-2" type="text" />
          <Form.Label>Nombre de la vía</Form.Label>
          <Form.Control className="mb-2" type="text" />
          <Form.Label>Número de via</Form.Label>
          <Form.Control className="mb-2" type="number" />
        </Form.Group>
        <h5>Características del inmueble</h5>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tipo de piso (opcional)</Form.Label>
          <Form.Check type="checkbox" name="piso" id="piso" label="Piso" />
          <Form.Check type="checkbox" name="atico" id="atico" label="Ático" />
          <Form.Check
            type="checkbox"
            name="duplex"
            id="duplex"
            label="Dúplex"
          />
          <Form.Check
            type="checkbox"
            name="estudio"
            id="estudio"
            label="Estudio"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Estado del piso</Form.Label>
          <Form.Check
            type="radio"
            name="estadoRadio"
            id="bueno"
            label="Buena estado"
          />
          <Form.Check
            type="radio"
            name="estadoRadio"
            id="remformar"
            label="A refomar"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            m<sup>2</sup> del inmueble
          </Form.Label>
          <Form.Control
            type="number"
            name="metrosCuadrados"
            id="metrosCuadrados"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Número de habitaciones</Form.Label>
          <Form.Control type="number" name="habitaciones" id="habitaciones" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Número de baños</Form.Label>
          <Form.Control type="number" name="baños" id="baños" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ascensor</Form.Label>
          <Form.Check type="radio" name="ascensor" id="ascensor" label="Si" />
          <Form.Check type="radio" name="ascensor" id="ascensor" label="No" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Otras características</Form.Label>
          <Form.Check
            type="checkbox"
            name="aireAcondicionado"
            id="aireAcondicionado"
            label="Aire acondicionado"
          />
          <Form.Check
            type="checkbox"
            name="calefaccion"
            id="calefaccion"
            label="Calefacción"
          />
          <Form.Check
            type="checkbox"
            name="piscina"
            id="piscina"
            label="Piscina"
          />
          <Form.Check
            type="checkbox"
            name="jardin"
            id="jardin"
            label="Jardín"
          />
          <Form.Check
            type="checkbox"
            name="trastero"
            id="trastero"
            label="Trastero"
          />
          <Form.Check
            type="checkbox"
            name="garaje"
            id="garaje"
            label="Garaje"
          />
          <Form.Check
            type="checkbox"
            name="terraza"
            id="terraza"
            label="Terraza"
          />
          <Form.Check
            type="checkbox"
            name="balcon"
            id="balcon"
            label="Balcón"
          />
          <Form.Check
            type="checkbox"
            name="armariosEmpotrados"
            id="armariosEmpotrados"
            label="Armarios empotrados"
          />
          <Form.Check
            type="checkbox"
            name="amueblado"
            id="amueblado"
            label="Amueblado"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear anuncio
        </Button>
      </Form>
    </Container>
  );
}
