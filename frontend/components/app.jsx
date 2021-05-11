import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import Home from './home/home'

 const App = () => (
    <div>
        <Route path="/signup" component={SignupContainer}/>
        <Route path="/login" component={LoginContainer}/>
        <Route exact path="/" component={Home}/>
    </div>
)

export default App