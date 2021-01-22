import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { JumboData } from './jumbo-data';


type AboutMeProps = {
    index: number;
}




function ContentL(props: AboutMeProps) {
    return (
        <Row className="align-items-center" style={{height:'fit-content'}} xl={2}>
            <Col style={{ borderRight: "5px" }}>
                <h1>{JumboData[props.index].title}</h1>
                <p>{JumboData[props.index].text}</p>
            </Col>
            <Col>
                <Container fluid>
                    <Image src={JumboData[props.index].image} alt={JumboData[props.index].title + "image"} fluid roundedCircle/>
                </Container>
            </Col>
        </Row>
    );
}

export {
    ContentL
}