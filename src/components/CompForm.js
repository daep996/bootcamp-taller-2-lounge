import React, { Component } from "react";
import { Form, FormGroup, FormCheck, Button, Col,Row } from "react-bootstrap";

function CompForm() {
  const valForma = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      console.log("El formulario no es valido");
    } else {
      console.log("email:" + form.elements.email.value);
      console.log("password" + form.elements.password.value);

      var data = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      };
    }
  };

  return (
    <>
      <Form onSubmit={valForma} validated={true}>
        <FormGroup as={Col} className="mb-3"controlId="idname">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="name"
            placeholder="Pepito"
            name="name"
            required
          />
          <Form.Control.Feedback>Nombre valido</Form.Control.Feedback>
        </FormGroup>
        
        <FormGroup as={Col} className="mb-3"controlId="idlastname">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="lastname"
            placeholder="Perez Perez"
            name="lastname"
            required
          />
          <Form.Control.Feedback>Apellido valido</Form.Control.Feedback>
        </FormGroup>

        <FormGroup  as={Col} className="mb-3"controlId="idmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Correo electronico"
            name="email"
            required
          />
          <Form.Control.Feedback>email valido</Form.Control.Feedback>
        </FormGroup>
        <FormGroup  as={Col}  className="mb-3"controlId="idphone">
          <Form.Label>Número telefonico</Form.Label>
          <Form.Control
            type="phone"
            placeholder="601-1111111"
            name="phone"
            required
          />
        </FormGroup>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="idCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="idState">
                <Form.Label>Departamento</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="idZip">
                <Form.Label>Codigo postal</Form.Label>
                <Form.Control />
            </Form.Group>
        </Row>

        <FormGroup className="mb-3"controlId="idmsgeq">
        <Form.Label>Tengo una</Form.Label>
            <Form.Select className="mb-3" aria-label="Tengo una:">
                <option>Escoge una opción:</option>
                <option value="1">Queja</option>
                <option value="2">Pregunta</option>
                <option value="3">Reclamo</option>
            </Form.Select>
        </FormGroup>
        <FormGroup className="mb-3"controlId="idmsge">
          <Form.Label>Escribe tu mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="PQR"
            name="message"
            required
          />
        </FormGroup>

        
        <FormGroup className="mb-3"controlId="idtdp">
          <FormCheck type="checkbox" label="Acepto terminos y condiciones" name="chktpd" required />
        </FormGroup>


        <Button variant="warning" type="submit">
          Enviar
        </Button>
      </Form>

      
    </>
  );
}

export default CompForm;

