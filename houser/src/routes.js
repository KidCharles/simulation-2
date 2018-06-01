//import react and switch and route
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import components to be routed
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
// import House from './components/House';


//this is setting up our routes, need EXACT on the 'home'
export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
    </Switch>
)