import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/esm/Container';
import {ContentL} from './content-left';
import {ContentR} from './content-right';


type AboutMeProps = {
    index : number;
}


function jumboStyle () {
    return ({
        width : '80%',
        height : '500px',
        margin : 'auto',
        padding : '40px'
    });

}



function AboutMeJumbo (props : AboutMeProps) {
    const content = (props.index % 2 === 0) ? <ContentL index={props.index}/> : <ContentR index={props.index}/>;
    return (
        <Container style={{padding:"20px"}} >
            <Jumbotron style={jumboStyle()}>
                {content}
            </Jumbotron>
        </Container>
 );   
}

export {
    AboutMeJumbo
}