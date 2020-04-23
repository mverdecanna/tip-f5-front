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
            <div style={{height: "180px", display: "table", width: "100%", margin: "2", position: "relative"}}>
            {/* <Container > */}
                    {
                        players.length === 0 
                                ? <strong>No hay jugadores disponibles por el momento</strong> 
                                : <container style={{maxWidth: "inherit", position: "relative", height: "100%"}} >
                                  <Grid direction="row"  container >
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
</container>
                    }


                <div>
                    <button onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
                {/* </Container> */}
            </div>
            
        );
    }



};


export default PlayerList;