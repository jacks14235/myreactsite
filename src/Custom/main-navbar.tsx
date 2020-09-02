import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap';

function MainNavbar() {
    return (
        <Navbar variant="light" bg="primary">
            <LinkContainer to="/">
                <Navbar.Brand >
                    Home
                </Navbar.Brand>
            </LinkContainer>
            <Nav className="mr-auto">
                <LinkContainer to="/projects">
                    <Nav.Link>Projects</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/research">
                    <Nav.Link>Research</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/about-me">
                    <Nav.Link>About me</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/contact-me">
                    <Nav.Link>Contact Me</Nav.Link>
                </LinkContainer>

            </Nav>
            <LinkContainer to="/projects">
                <Nav.Link>Contact Me</Nav.Link>
            </LinkContainer>
        </Navbar>
    );
}

export {
    MainNavbar
}