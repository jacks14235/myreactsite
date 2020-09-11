import React from 'react';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import {MainNavbar} from '../Custom/main-navbar';


function Error404() {
    document.title = '404 Error';

    return (
        <div>
            <MainNavbar />
            <h1>404 Page Not Found</h1>
            <LinkContainer to="/">
                <Button variant="primary">Return to Homepage</Button>
            </LinkContainer>

        </div>
    )
}


export {
    Error404
}