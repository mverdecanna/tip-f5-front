import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './App';
import Login from './components/Login/Login';
import GlobalState from './components/GlobalState';


export default (
    <div>
        <Route path="/" component={GlobalState}>
            
            <IndexRedirect to="/home"/>
            
            <Route exact path="/login" component={Login}></Route>

            <Route exact path="/home" component={App}></Route>
            
        </Route>
    </div>
);
