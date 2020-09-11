import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardData } from './card-data';
import { LinkContainer } from 'react-router-bootstrap';


type MyCardProps = {
  index: number;
}


function MyCard(props: MyCardProps) {
  return (
    <div>
      <Card.Img variant="top" src={CardData[props.index].image} alt="Card Image" />
      <Card.Body>
        <Card.Title>{CardData[props.index].title}</Card.Title>
        <div style={{ height: "177px" }}>
          <Card.Text>{CardData[props.index].text}</Card.Text>
        </div>
        <LinkContainer to={CardData[props.index].address}>
          <Button variant="primary" className="mt-auto" block>
            {CardData[props.index]["button-text"]}
          </Button>
        </LinkContainer>
      </Card.Body>
    </div>
  )
}

export default MyCard;
