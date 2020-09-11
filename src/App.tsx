import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainPage} from './pages/main-page';
import {ProjectsPage} from './pages/projects';
import {ResearchPage} from './pages/research';
import {AboutMe} from './pages/about-me';
import {ContactMe} from './pages/contact-me';
import {Error404} from './pages/error-404';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {MainPage} />
        <Route exact path = '/projects' component = {ProjectsPage} />
        <Route exact path = '/research' component = {ResearchPage} />
        <Route exact path = '/about-me' component = {AboutMe} />
        <Route exacy path = '/contact-me' component = {ContactMe} />
        <Route exact path = '/404' component = {Error404} />
        <Redirect to='/404' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
