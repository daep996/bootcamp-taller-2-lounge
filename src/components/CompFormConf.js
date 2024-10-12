import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

function CompFormConf () {

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    
    const {inputValues: { firstName, lastName, email, address, city, state, phone }} = this.props;

    return(
            <Container>
                <h1>Confirme sus detalles</h1>
                <p>Confirme si los siguientes de talles son correctos.</p>
                <p>Nombre: {firstName}</p>
                <p>Apellidos: {lastName}</p>
                <p>Email: {email}</p>
                <p>Direccion: {address}</p>
                <p>Ciudad: {city}</p>
                <p>Departamente: {state}</p>
                <p>Telefono: {phone}</p>
                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary">Confirm</Button>
            </Container>
        )
    }
}

export default CompFormConf;