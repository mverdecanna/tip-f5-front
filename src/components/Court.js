import React, {Component} from 'react';
import { Container, Grid } from '@material-ui/core';

import './Court.css';
import court from '../cancha_gde.jpg';

import Card from './Card';


class Court extends Component {

    constructor(){
        super();
        this.state = {
            confirmedPlayers: []
        };
    }


    render(){

        const { confirmedPlayers } = this.state;

        return (
             <div  className="Court">
             <img src={court} alt="court_img" />
                <Container style={{position: "absolute", top: 0, left: 0}}>
                    <Grid container spacing={10} >
                        <Grid item xs={6} >
                            {
                            confirmedPlayers.map( confirmedPlayer => {
                                return (
                                    <Card 
                                        key={confirmedPlayer._id}
                                        player={confirmedPlayer}
                                        //name={confirmedPlayer.name}
                                        //nick={confirmedPlayer.nickname}
                                        confirmed={true}
                                        functionClick={this.handleGetOffTheList}
                                    />                                                
                                )
                            })
                            }
                        </Grid>
                    </Grid>
                </Container>
             </div>

        );

    }




}

export default Court;