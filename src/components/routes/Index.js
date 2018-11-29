import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import LandingPage from '../layout/LandingPage';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import NotFound from '../notFound/NotFound';
import Dashboard from '../layout/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Register} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact component={NotFound} />
  </Switch>
);

export default Routes;
