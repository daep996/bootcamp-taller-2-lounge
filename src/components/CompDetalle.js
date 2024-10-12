import React from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";

function CompDetalle() {
    const idProducto = useSelector((state) => state.dataFetch.idProducto);
    const producto = useSelector((state) =>
        state.dataFetch.data.find((item) => item.id === idProducto)
    );

    if (!producto) {
        return <p className="text-center mt-4">No se ha seleccionado ningún producto.</p>;
    }

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={producto.image}
                            alt={producto.title}
                            style={{
                                height: "300px",
                                objectFit: "contain",
                                padding: "1rem",
                                backgroundColor: "#f8f9fa"
                            }}
                        />
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>
                                <strong>Descripción:</strong> {producto.description}
                            </Card.Text>
                            <Card.Text>
                                <strong>Precio:</strong> ${producto.price.toFixed(2)}
                            </Card.Text>
                            <Card.Text>
                                <strong>Categoría:</strong> {producto.category}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CompDetalle;
