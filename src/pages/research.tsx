import React from 'react';
import ReactPlayer from 'react-player';
import { MainNavbar } from '../Custom/main-navbar';
import Container from 'react-bootstrap/esm/Container';





function ResearchPage() {
    document.title = 'Research';
    return (
        <div>
            <MainNavbar />
            <Container>
                <h1 style={{textAlign : 'center'}}>Cracking the Encode: The consequences of normalizing training data in AI music composition</h1>
                <br/>
                <h3 style={{textAlign : 'center'}}>Abstract</h3>
                <p>Machine learning algorithms are being applied to a diverse range of applications, maybe one of the most surprising being musical composition. This paper investigates how the encoding of training data affects stylistic components of music, specifically tempo and dynamics. The object of analysis is MuseNet, a recurrent LSTM model capable of mimicking music in a range of genres and composers. Focusing on compositions based on romantic composer Frédéric Chopin, analysis of MuseNet’s compositions were compared to human performances of his works. This investigation finds that the AI-written music lacks diversity in both tempo and dynamic range, ultimately limiting the potential for stylistic and emotional aspects of music.</p>
                <br/>
                <br/>
                <h3 style={{textAlign : 'center'}}>Video Abstract</h3>
                <ReactPlayer className="centerX" url='https://www.youtube.com/watch?v=Br3SwyfNeV8' />
            </Container>
        </div>
    )
}

export {
    ResearchPage
}