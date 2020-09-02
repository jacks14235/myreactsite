import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { MainNavbar } from '../Custom/main-navbar';
import { AboutMeJumbo } from '../Custom/about-me-jumbo/abtme-jumbo';
import { JumboData } from '../Custom/about-me-jumbo/jumbo-data';
import { SpinningImage } from '../Custom/spinning-image';
import Background from '../Images/background.jpg';


type AboutMeProps = {
    index: number;
}


function AboutMe(props: AboutMeProps) {
    return (
        <div style={{backgroundImage:`url(${Background})`}}>
            <MainNavbar></MainNavbar>
            <Container style={{ padding: '30px' }} fluid>

                <div>
                    {JumboData.map((data, index) => {
                        return (<AboutMeJumbo index={index} />);
                    })}
                </div>
            </Container>
        </div>
    );
}

export {
    AboutMe
}