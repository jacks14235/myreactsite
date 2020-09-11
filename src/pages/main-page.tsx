import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNavbar } from '../Custom/main-navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { CardData } from '../Custom/card-data';
import { FlipCard } from '../Custom/flip-card';

function MainPage() {
    document.title = 'Jack Stanley';
    return (
        <div >
            <MainNavbar />
            <Container fluid>
                <Row style={{ height: '150px' }}>
                    <Container>
                        <br />
                        <h1 style={{ color: "black", textAlign: "center" }}>Welcome!</h1>
                        <p style={{ color: "black", textAlign: "center" }}>See what I have to offer.</p>
                    </Container>
                </Row>
                <Row xl={4} className="fullscreen">
                    {CardData.map((data, index) => {
                        return (<Col><FlipCard index={index} delay={250 + 250 * index}></FlipCard></Col>)
                    })}
                </Row>
            </Container>
        </div>
    );
}

export {
    MainPage
}