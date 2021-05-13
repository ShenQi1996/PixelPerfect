import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import NavBarContainer from "./nav_bar/nav_bar_container"
import Home from './home/home'
import {AuthRoute} from '../util/route_util'

 const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LoginContainer}/>
        <Route exact path="/" component={Home}/>
    </div>
)

export default App