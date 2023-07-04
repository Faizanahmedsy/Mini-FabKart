import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Navigation = () => {

    const cartProducts = useSelector(state => state.cart)



    return (
        <>



            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Fazu Kart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link to="/" as={Link}>Products</Nav.Link>
                            <Nav.Link to="/cart" as={Link}>Cart {cartProducts.length}</Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Navigation