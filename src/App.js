import React, { Component } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import SuperList from './components/SuperList';
import Home from './components/Home';
import Login from './components/Login/Login'
import Loader from './components/Login/Loader';




class App extends Component {

  constructor(props){
    super(props);

    // const { userEmail } = this.props;
    // console.log(`****  App  constructor  userEmail:  ${ JSON.stringify(userEmail) }`);

    // this.state = {
    //   userEmail: userEmail
    // }

  }

  componentWillMount() {

    const { authOK } = this.props;
    console.log(`****  App  componentWillMount  authOK:  ${ JSON.stringify(authOK) }`);

    if(!authOK){

      this.props.router.push('/login');

    }
  }



  render(){

    const { userEmail, userRole, group } = this.props;
    console.log(`****  App  render  userEmail:  ${ JSON.stringify(userEmail) }`);
    console.log(`****  App  render  group:  ${ JSON.stringify(group) }`);

    return(
      <div className="App">

        <header router={this.props.router}></header>
        <Home userEmail={userEmail} role={userRole} group={group}/>

      </div>
    )
  }
  

}

export default App;
