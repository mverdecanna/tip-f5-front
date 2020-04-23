import React, {Component} from 'react';
import { render } from '@testing-library/react';

import PlayerList from './PlayerList';
import MenuBar from './MenuBar';
import Court from './Court';
import { Hidden } from '@material-ui/core';
import { saddlebrown } from 'color-name';



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

        const { players, confirmedPlayers } = this.state;

        return(
            <div style={{position: "static"}}>
                <MenuBar />
                <PlayerList />
                <Court />
            </div>
        );


    }    



}

export default Home;
