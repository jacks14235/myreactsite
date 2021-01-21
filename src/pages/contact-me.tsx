import React from 'react';
import { MainNavbar } from '../Custom/main-navbar';
import { Card, Container, Row, Col } from 'react-bootstrap';
import email from '../Images/contact-email.jpg';
import phone from '../Images/contact-phone.jpg';

function ContactMe() {
  document.title = 'Contact Me';

  return (
    <div>
      <MainNavbar />
      <Container fluid>
        <Row style={{ width: "80%", margin: '10%' }}>
          <h3 className='contact-h1'>Please feel free to contact me about any job or internship opportunities or any questions you have about my programs or research!</h3>
        </Row>
        <Row xl={2} md={2} sm={1} xs={1}>
          <Col>
            <Card style={{marginBottom:"10%"}}>
              <Card.Img variant="top" src={email} />
              <Card.Title className="contact-card-title">Email</Card.Title>
              <Card.Subtitle className="contact-card-title">jcs9@princeton.edu</Card.Subtitle>
              <br />
              <Card.Text>Email is my preferred means of communication. Email me anytime and I should get back to you within the day!</Card.Text>
            </Card>
          </Col>
          <Col>
            <Card style={{marginBottom:"10%"}}>
              <Card.Img variant="top" src={phone} />
              <Card.Title className="contact-card-title">Phone</Card.Title>
              <Card.Subtitle className="contact-card-title">973-479-0958</Card.Subtitle>
              <br />
              <Card.Text>Please only contact me by phone if I am not answering my email or if you really prefer calling me. Otherwise, I would prefer to be contacted through my email. Thanks!</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export {
  ContactMe
}