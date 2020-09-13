import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { projectData } from './project-data';
import { LinkContainer } from 'react-router-bootstrap';


type ProjectViewProps = {
    index: number;
}


function jumboStyle(props: ProjectViewProps) {
    return ({
        backgroundImage: `url(${projectData[props.index].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '80%',
        height: '500px',
        margin: 'auto',
    });

}



function ProjectView(props: ProjectViewProps) {
    return (
        <Container style={{ padding: '30px' }} fluid>
            <Jumbotron style={jumboStyle(props)}>
                <h1 style={{ color: "lightgray" }}>{projectData[props.index].title}</h1>
                <h3 style={{ color: "white" }}>{projectData[props.index].subtitle}</h3>
                <Row style={{ height: "100%" }}>
                    <Col>
                        <p className="project-text">Test {projectData[props.index].description}</p>
                    </Col>
                    <Col>
                        <Button variant="primary" className="centered" size={'sm'} href={projectData[props.index].link}>
                            View on GithubTest
                        </Button>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    );
}

export {
    ProjectView
}