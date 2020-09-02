import React from 'react';
import {Card, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardData} from './card-data';
import {LinkContainer} from 'react-router-bootstrap';


type MyCardProps = {
    index : number;
}


function MyCard(props : MyCardProps) {
 return (
  <Container>
   <Card className="mb-3 " >
    <Card.Img variant="top" src = {CardData[props.index].image}/>
     <Card.Body>
      <Card.Title>{CardData[props.index].title}</Card.Title>
      <Card.Text>{CardData[props.index].text}</Card.Text>
      <LinkContainer to={CardData[props.index].address}>
        <Button variant="primary" className="mt-auto" block>
        {CardData[props.index]["button-text"]}
        </Button>
      </LinkContainer>
    </Card.Body>
   </Card>
 </Container>
 )
}

export default MyCard;
