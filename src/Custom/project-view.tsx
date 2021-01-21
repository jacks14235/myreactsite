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

function jumboStyle2(props: ProjectViewProps) {
  return ({
    backgroundImage: `url(${projectData[props.index].image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '20px',
    padding:'5%',
    width: '80%',
    height: '80%',
    margin: 'auto',
    marginTop: '10%',
  });
}



function ProjectView(props: ProjectViewProps) {
  return (
    <Container style={{ padding: '30px' }} fluid>
      <Jumbotron style={jumboStyle(props)}>
        <h1 style={{ color: "lightgray", fontSize: "x-large" }}>{projectData[props.index].title}</h1>
        <h3 style={{ color: "white", fontSize: "large" }}>{projectData[props.index].subtitle}</h3>
        <Row style={{ height: "300px" }}>
          <Col style={{ overflow: "scroll" }}>
            <p className="project-text">{projectData[props.index].description}</p>
          </Col>
          <Col>
            <Button variant="primary" className="centered" size={'sm'} href={projectData[props.index].link}>
              View on Github
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

function ProjectView2(props: ProjectViewProps) {
  return (
    <div style={jumboStyle2(props)}>
      <h1 style={{color: 'lightgray', height:'10%'}}>{projectData[props.index].title}</h1>
      <h3 style={{ color: "white", height:'7%' }}>{projectData[props.index].subtitle}</h3>
        <Row style={{ height: "fit-content" }}>
          <Col>
            <p className="project-text">{projectData[props.index].description}</p>
          </Col>
          <Col>
            <Button variant="primary" className="centered" size={'sm'} href={projectData[props.index].link}>
              View on Github
            </Button>
          </Col>
        </Row>
    </div>
  )
}

export {
  ProjectView, ProjectView2
}