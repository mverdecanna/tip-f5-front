import React, {Component} from 'react';
import { render } from '@testing-library/react';

import PlayerList from './PlayerList';
import MenuBar from './MenuBar';




class Home extends Component {

    constructor(){
        super();
        this.state = {
            players: [],
            confirmedPlayers: []
        };
        console.log("constructor");
    }



    render(){
        console.log("render");
        const { players, confirmedPlayers } = this.state;
        return(
            <div>
                <MenuBar />
                <PlayerList />
            </div>
        );


    }    



}

export default Home;
