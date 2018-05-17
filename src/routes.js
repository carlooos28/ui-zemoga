// Dependencies
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import PastTrials from './components/PastTrials';
/*import App from './components/App';
import Page404 from './components/Page404';*/

// Containers
import Home from './containers/Home';


// import Library from './containers/Library';

/*    <Route exact path="/about" component={About} />
      <Route component={Page404} />
      */

const AppRoutes = () =>
  
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/past-trials" component={PastTrials} />
    </Switch>
  
export default AppRoutes;