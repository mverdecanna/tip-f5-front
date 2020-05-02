import React, {Component} from 'react';

//import SuperList from './SuperList';
import Card from './Card';
import playerService from '../services/PlayerService';
import { Grid, Container } from '@material-ui/core';
import DialogConfirmGame from './DialogConfirmGame';
import ConfirmGame from './ConfirmGame';
import UIfx from 'uifx';
import whistle from '../Whistle-noise.mp3';
import { delay } from 'q';


const silbato = new UIfx({asset: whistle});


class PlayerList extends Component {

    constructor(props){
        super(props);
        const { role } = this.props;
        console.log(`**** PlayerList  constructor  role:  ${ JSON.stringify(role) }`);
        this.state = {
            players: [],
            confirmedPlayers: [],
            gameConfirmed: false,
            tenPlayersConfirmed: false,
            buttonConfirmGame: false,
            isAdmin: (role === "ADMIN")
        };

        // const { userEmail } = this.props;
        console.log(`****  PlayerList  constructor  isAdmin:  ${ JSON.stringify(this.state.isAdmin) }`);
        console.log("constructor");
    }


    componentWillMount(){
        this.handleUpdateClick();
    }


    handleUpdateClick = async () => {

        const result = await playerService.getPlayers();
        
        console.log(`****  result:  ${ JSON.stringify(result) }`);
        
        this.setState({
            players: result.data
        });
    }


    handleConfirmPlayer = async (playerConfirm) => {
        console.log(`****  PLAYER:  ${playerConfirm}`);

        const { players, confirmedPlayers } = this.state;
        var areTen = confirmedPlayers.length === 9;
        
        if(confirmedPlayers.length < 10){
            const updateAvailables = players.filter( player => {
                return player.name !== playerConfirm.name
            });
    
            this.setState({
                players: updateAvailables,
                confirmedPlayers: [...confirmedPlayers, playerConfirm],
                tenPlayersConfirmed: areTen
            });
        }
        console.log(`****  ARE TEN:  ${areTen}`);
    }


    handleGetOffTheList = async (player) => {
        //console.log(`****  PLAYER:  ${ JSON.stringify(player) }`);

        const { players, confirmedPlayers, buttonConfirmGame, gameConfirmed } = this.state;
        
        if(!gameConfirmed){

            const updatedConfirmedPlayer = confirmedPlayers.filter( confirmed => {
                return confirmed._id !== player._id
            });
    
            this.setState({
                players: [...players, player],
                confirmedPlayers: updatedConfirmedPlayer,
                buttonConfirmGame: false
            });
        }

    }


    handleCloseModal = () => {
        this.setState({
            tenPlayersConfirmed: false
        })
    }


    handleButtonConfirmGame = () => {
        this.setState({
            buttonConfirmGame: true
        })
    }
    
    
    handleConfirmGame = () => {
        this.setState({
            gameConfirmed: true
        })
    }


    effectWhistle = () => {
        //silbato.play();
        setTimeout(function() {
            
            document.getElementById('audio').play();

        }, 2000);
    }

 
    render(){
        console.log("render");
        const { players, confirmedPlayers, tenPlayersConfirmed, buttonConfirmGame, isAdmin } = this.state;
        const { userEmail } = this.props;
       // console.log(`****  PlayerList  render  userEmail:  ${ JSON.stringify(userEmail) }`);
        return(
            <div className="App">
                    <audio id="audio" ><source src={whistle} type="audio/mp3" ></source></audio>

                    <div style={{display: "inline-flex", justifyContent: "space-between", width: "90%", fontFamily: "fantasy", fontSize: "xx-large"}}>
                        <h1>JUGADORES DISPONIBLES</h1>
                            
                            {
                                buttonConfirmGame ? <ConfirmGame confirm={this.handleConfirmGame}
                                                                 effect={this.effectWhistle} /> : <p/>
                            }
                            
                        <h1>JUGADORES CONFIRMADOS</h1>
                    </div>
                    
                    <br/><br/>

                        {
                            players.length === 0 
                                ? <strong>No hay jugadores disponibles por el momento</strong> 
                                : 
                                <Container>
                                <Grid container spacing={10} >
                                  <Grid item xs={6} container>
                                    {
                                        players.map( player => {
                                            return (
                                                <Card 
                                                    key={player._id}
                                                    player={player}
                                                    confirmed={false}
                                                    functionClick={this.handleConfirmPlayer}
                                                    logged={ userEmail === player.email }
                                                    isAdmin={isAdmin}
                                                />                                                
                                            )
                                        })
                                    }
                                  </Grid>
                                  <Grid  item xs={6} container>
                                    {
                                        confirmedPlayers.map( confirmedPlayer => {
                                            return (
                                                <Card 
                                                    key={confirmedPlayer._id}
                                                    player={confirmedPlayer}
                                                    confirmed={true}
                                                    functionClick={this.handleGetOffTheList}
                                                    logged={ userEmail === confirmedPlayer.email }
                                                    isAdmin={isAdmin}
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
                        {
                            players.length > 0
                                ?  <br/>
                                :  <button style={{backgroundColor: "red", width: "100px", padding: "15", borderColor: "black"}} onClick={this.handleUpdateClick}>Actualizar</button>
                        
                        }
                </div>

                <DialogConfirmGame
                    jump={tenPlayersConfirmed}
                    onClose={this.handleCloseModal}
                    renderButton={this.handleButtonConfirmGame}
                 />

            </div>
            
        );
    }



};


export default PlayerList;