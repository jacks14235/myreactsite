import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import { JumboData } from './jumbo-data';


type AboutMeProps = {
    index: number;
}




function ContentR(props: AboutMeProps) {
    return (
        <Row className="align-items-center" style={{height:'fit-content'}} xl={2}>
            <Col>
                <Container fluid>
                    <Image src={JumboData[props.index].image} alt={JumboData[props.index].title + "image"} fluid roundedCircle />
                </Container>
            </Col>
            <Col style={{ borderRight: "5px" }}>
                <h1>{JumboData[props.index].title}</h1>
                <p>{JumboData[props.index].text}</p>
            </Col>

        </Row>
    );
}

export {
    ContentR
}