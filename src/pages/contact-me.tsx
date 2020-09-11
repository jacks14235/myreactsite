import React from 'react';
import { MainNavbar } from '../Custom/main-navbar';
import { Card, Container, Row } from 'react-bootstrap';
import email from '../Images/contact-email.jpg';
import phone from '../Images/contact-phone.jpg';

function ContactMe() {
    document.title = 'Contact Me';

    return (
        <div>
            <MainNavbar />
            <br />
            <br />
            <div className="centerX" style={{ width:"80%" }}>
                <h3 className='contact-h1'>Please feel free to contact me about any job or internship opportunities or any questions you have about my programs or research!</h3>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row xl={5} className="fullscreen">
                <div></div>
                <Card>
                    <Card.Img variant="top" src={email} />
                    <Card.Title className="contact-card-title">Email</Card.Title>
                    <Card.Subtitle className="contact-card-title">jcs9@princeton.edu</Card.Subtitle>
                    <br />
                    <Card.Text>Email is my preferred means of communication. Email me anytime and I should get back to you within the day!</Card.Text>
                </Card>
                <div></div>
                <Card>
                    <Card.Img variant="top" src={phone} />
                    <Card.Title className="contact-card-title">Phone</Card.Title>
                    <Card.Subtitle className="contact-card-title">973-479-0958</Card.Subtitle>
                    <br />
                    <Card.Text>Please only contact me by phone if I am not answering my email or if you really prefer calling me. Otherwise, I would prefer to be contacted through my email. Thanks!</Card.Text>
                </Card>
                <div></div>
            </Row>
        </div>
    )
}

export {
    ContactMe
}