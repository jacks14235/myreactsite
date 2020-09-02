import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { ProjectView } from '../Custom/project-view';
import { projectData } from '../Custom/project-data';
import { MainNavbar } from '../Custom/main-navbar';
import Background from '../Images/background.jpg';


function ProjectsPage() {
  return (
    <div style={{backgroundImage:`url(${Background})`}}>
      <MainNavbar />
      <Container fluid>

        {projectData.map((data, index) => {
          return (<ProjectView index={index}></ProjectView>);
        })}
      </Container>
    </div>
  );
}

export {
  ProjectsPage
}