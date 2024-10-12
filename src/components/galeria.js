import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setData, setId } from "../store/dataSlice";

import { Card, Container, Row, Col, Pagination } from 'react-bootstrap'

const Galeria = () => {
    const products = useSelector((state) => state.dataFetch.data);
    const idSelected = useSelector((state) => state.dataFetch.idProducto);
    const dispatch = useDispatch();
    const url = "https://fakestoreapi.com/products";

    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 6
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((dataAPI) => {
            console.log("results: ", dataAPI);
            dispatch(setData(dataAPI));
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }, []);

    const cardSelected = (id) => () => {
        console.log('id: ', id)
        dispatch(setId(id))
    }

    return (
        <>
            {products.length === 0 && <p className="text-center mb-4">No hay productos...</p>}
            {products.length > 0 && (
                <Container className="my-4">
                    <h2>Galeria</h2>
                    <Row xs={1} md={2} lg={3} className="g-4">
                    {currentProducts.map((product) => (
                        <Col key={product.id}>
                             <Link to="/detalle-producto" onClick={() => dispatch(setId(product.id))}>
                        <Card className="h-100 text-body-secondary" onClick={cardSelected(product.id)}>
                            <Card.Img
                                variant="top"
                                src={product.image}
                                alt={product.title}
                                style={{
                                    height: "200px",
                                    objectFit: "contain",
                                    padding: "1rem",
                                }}
                            />
                            <Card.Body className="d-flex flex-column">
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text className="flex-grow-1">
                                {product.description.substring(0, 100)}...
                            </Card.Text>
                            <Card.Text className="mt-auto">
                                <strong>Precio: ${product.price.toFixed(2)}</strong>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                        </Col>
                    ))}
                    </Row>
                    <div className="d-flex justify-content-center mt-4">
                    <Pagination>
                        <Pagination.Prev
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        />
                        {Array.from({
                        length: Math.ceil(products.length / productsPerPage),
                        }).map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                        ))}
                        <Pagination.Next
                        onClick={() => paginate(currentPage + 1)}
                        disabled={
                            currentPage ===
                            Math.ceil(products.length / productsPerPage)
                        }
                        />
                    </Pagination>
                    </div>
                </Container>
                )
            }
        </>
    );
};

export default Galeria;
