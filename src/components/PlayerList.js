import React, {Component} from 'react';

//import SuperList from './SuperList';
import Card from './Card';
import playerService from '../services/PlayerService';
import { Grid, Container } from '@material-ui/core';

//import SuperList from '../components/SuperList';


class PlayerList extends Component {

    constructor(){
        super();
        this.state = {
            players: [],
            confirmedPlayers: []
        };
        console.log("constructor");
    }



    handleUpdateClick = async () => {

        const result = await playerService.getPlayers();
        
        console.log(`****  result:  ${ JSON.stringify(result) }`);
        
        this.setState({
            players: result.data
        });

        // fetch(api_weather).then( resolve => {
        //     return resolve.json();
        // }).then( data => {
        //     const newWeather = transformWeather(data);
        //     console.log(data);
        //     debugger;
        //     this.setState({
        //         data: newWeather
        //     });
        // });
    }


    handleConfirmPlayer = async (playerConfirm) => {
        console.log(`****  PLAYER:  ${playerConfirm}`);

        const { players, confirmedPlayers } = this.state;
        
        // const newConfirm = players.filter( player => {
        //     return player.name === playerName
        // })[0];

        const updateAvailables = players.filter( player => {
            return player.name !== playerConfirm.name
        });

        this.setState({
            players: updateAvailables,
            confirmedPlayers: [...confirmedPlayers, playerConfirm]
        });
    }


    handleGetOffTheList = async (player) => {
        //console.log(`****  PLAYER:  ${ JSON.stringify(player) }`);

        const { players, confirmedPlayers } = this.state;
        
        const updatedConfirmedPlayer = confirmedPlayers.filter( confirmed => {
            return confirmed._id !== player._id
        });

        this.setState({
            players: [...players, player],
            confirmedPlayers: updatedConfirmedPlayer
        });
    }



 
    render(){
        console.log("render");
        const { players, confirmedPlayers } = this.state;
        return(
            <div className="App">
                    <h2>JUGADORES DISPONIBLES</h2>
                    <br/><br/>

                        {
                            players.length === 0 
                                ? <strong>No hay jugadores disponibles por el momento</strong> 
                                : 
                                <Container>
                                <Grid container spacing={10} >
                                  <Grid item xs={6} >
                                    {
                                        players.map( player => {
                                            return (
                                                <Card 
                                                    key={player._id}
                                                    player={player}
                                                    //name={player.name}
                                                    //nick={player.nickname}
                                                    confirmed={false}
                                                    functionClick={this.handleConfirmPlayer}
                                                />                                                
                                            )
                                        })
                                    }
                                  </Grid>
                                  <Grid  item xs={6} >
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
                        }

                <br/><br/>

                <div>
                    <button onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
            </div>
            
        );
    }



};


export default PlayerList;