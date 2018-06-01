//import react and switch and route
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import components to be routed
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

// import House from './components/House';


//this is setting up our routes, need EXACT on the 'home'
export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
        <Route path='/step1' component={Step1} />
        <Route path='/step2' component={Step2} />
        <Route path='/step3' component={Step3} />
    </Switch>
)