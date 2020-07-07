import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './App';
import Login from './components/Login/Login';
import PostLogin from './components/Login/PostLogin';
import GlobalState from './components/GlobalState';
import History from './components/History/History';
import Home from './components/Home';
import CreateGroup from './components/group/CreateGroup';
import Registration from './components/Registration/Registration';


export default (
    <div>
        <Route path="/" component={GlobalState}>
            
            <IndexRedirect to="/home"/>
            
            <Route exact path="/login" component={Login}></Route>

            <Route exact path="/registration" component={Registration}></Route>

            <Route exact path="/group" component={PostLogin}></Route>

            <Route exact path="/createGroup" component={CreateGroup}></Route>

            <Route exact path="/home" component={App}>

                <IndexRedirect to="/game"/>

                <Route exact path="/history" component={History}></Route>

                <Route exact path="/game" component={Home} ></Route>


            </Route>

            
        </Route>
        
        <Route  path="*" >

            <IndexRedirect to="/login"/>

        </Route>

    </div>
);
