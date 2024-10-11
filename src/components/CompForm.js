import React, { Component } from "react";
import { Form, FormGroup, FormCheck, Button } from "react-bootstrap";

function CompForm() {

    const valForma = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            console.log("El formulario no es valido");
        } else{

            console.log("email:" + form.elements.email.value);
            console.log("password" + form.elements.password.value);

            var data ={
                email:form.elements.email.value,
                password: form.elements.password.value,
            }

            
        }
    };

    return (

        <>
        <Form  onSubmit={valForma} validated={true}>
            <FormGroup controlId="idmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Correo electronico"
                    name="email"
                    required
                />
                <Form.Control.Feedback>email valido</Form.Control.Feedback>
            </FormGroup>
            <FormGroup controlId="idpasswd">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Contraseña"  
                    name="password" 
                    required 
                />
            </FormGroup>
            <FormGroup controlId="idtdp">
                <FormCheck 
                    type="checkbox" 
                    label="TDP" 
                    name="chktpd" 
                    required
                />
            </FormGroup>

        <Button variant="warning" type="submit">
            Enviar
        </Button>
        </Form>

        
        <div>
        <h1>detalle </h1>
        </div>
        </>
    )
}

export default CompForm;npm