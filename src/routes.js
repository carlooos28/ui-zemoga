// Dependencies
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import PastTrials from './components/PastTrials';
import HowItWorks from './components/HowItWorks';
import LogIn from './components/LogIn';

// Containers
import Home from './containers/Home';

const AppRoutes = () =>
  
    <Switch>
        <Route exact path="/landing-page-pope-francis/" component={Home} />
        <Route exact path="/landing-page-pope-francis/past-trials" component={PastTrials} /> 
        <Route exact path="/landing-page-pope-francis/how-it-works" component={HowItWorks} />         
        <Route exact path="/landing-page-pope-francis/log-in" component={LogIn} />                         
    </Switch>
  
export default AppRoutes;
