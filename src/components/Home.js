import React, {Component} from 'react';
import { render } from '@testing-library/react';

import PlayerList from './PlayerList';
import MenuBar from './MenuBar';




class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            players: [],
            confirmedPlayers: []
        };
        // const { userEmail } = this.props;
        // console.log(`****  Home  componentWillMount  userEmail:  ${ JSON.stringify(userEmail) }`);
        console.log("constructor");
    }


    // componentWillMount() {

    //     const { userEmail } = this.props;
    //     console.log(`****  Home  componentWillMount  userEmail:  ${ JSON.stringify(userEmail) }`);
    // }


    render(){
        console.log("render");
        //const { players, confirmedPlayers } = this.state;
        const { userEmail, role, group } = this.props;
        console.log(`****  Home  render  userEmail:  ${ JSON.stringify(userEmail) }`);
        console.log(`****  Home  render  role:  ${ JSON.stringify(role) }`);
        console.log(`****  Home  render  group:  ${ JSON.stringify(group) }`);

        return(
            <div>
                <MenuBar userEmail={userEmail} role={role} group={group}/>
                <PlayerList userEmail={userEmail} role={role} group={group}/>
            </div>
        );


    }    



}

export default Home;
