import React, {Component} from 'react';

import Card from './Card';
import playerService from '../services/PlayerService';
import gameService from '../services/GameService';
import { Grid, Container } from '@material-ui/core';
import DialogConfirmGame from './DialogConfirmGame';
import ConfirmGame from './ConfirmGame';
import SuspendGame from './SuspendGame';
import UIfx from 'uifx';
import whistle from '../sounds/Whistle-noise.mp3';
import boo from '../sounds/boo.mp3';
import helper from '../util/Helper';
import FormHelperText from '@material-ui/core/FormHelperText';


//import { delay } from 'q';

//const silbato = new UIfx({asset: whistle});


class PlayerList extends Component {

    constructor(props){
        super(props);
        const { role, userRole, day, getGlobalDay } = this.props;
        console.log(`**** PlayerList  constructor  role:  ${ userRole }`);
        console.log(`**** PlayerList  constructor  day:  ${ day }`);
        
        var getDay = getGlobalDay();
        console.log(`**** PlayerList  constructor  getDay:  ${ getDay }`);

        this.state = {
            players: [],
            confirmedPlayers: [],
            gameDay: null,
            gameDate: null,
            gameConfirmed: false,
            gameSuspended: false,
            tenPlayersConfirmed: false,
            buttonConfirmGame: false,
            isAdmin: (userRole === "ADMIN")
        };

        // const { userEmail } = this.props;
        //console.log(`****  PlayerList  constructor  isAdmin:  ${ JSON.stringify(this.state.isAdmin) }`);
        //console.log("constructor");
    }


    componentWillMount(){
        this.handleDateOfTheCurrentGame();
        this.handleUpdateClick();
    }


    componentDidUpdate(prevProps) {

        console.log(`****  prevProps:  ${ JSON.stringify(prevProps) }`);

        if (this.props.group !== prevProps.group) {
            this.handleDateOfTheCurrentGame();
            this.handleUpdateClick();
        }
    }


    handleDateOfTheCurrentGame = () => {

        const { day, getGlobalDay } = this.props;
        console.log(`**** PlayerList  handleDateOfTheCurrentGame  day:  ${ day }`);

//       const getDay = getGlobalDay();
//        console.log(`**** PlayerList  handleDateOfTheCurrentGame  getDay:  ${ getDay }`);

        const date = helper.getDateOfTheNextGame(day); // 2 = martes

        this.setState({
            gameDate: date,
            gameDay: day
        });
    }


    handleUpdateClick = async () => {
        const { group } = this.props;

        const result = await playerService.getPlayers(group);
        
        console.log(`****  result:  ${ JSON.stringify(result) }`);
        // this.setState({
        //     players: result.data
        // });
        this.handleGameInit(result.data)
    }


    handleGameInit = async (players) => {
        console.log(`****  - players:  ${ JSON.stringify(players) }`);
        const { group, userRole } = this.props;
        console.log(`**** handleGameInit  group:  ${ JSON.stringify(group) }`);
        console.log(`**** handleGameInit  userRole:  ${ JSON.stringify(userRole) }`);

        const { gameDate } = this.state;
        console.log(`**** handleGameInit  gameDate:  ${ JSON.stringify(gameDate) }`);

        const game = await gameService.getNextGame(group, gameDate);
        console.log(`**** handleGameInit  game:  ${ JSON.stringify(game) }`);
        console.log(`**** handleGameInit  userRole:  ${ JSON.stringify(userRole) }`);

        if( game && game.data ){

            const { confirmedPlayers, status } = game.data;
            console.log(`****  - confirmedPlayers:  ${ JSON.stringify(confirmedPlayers) }`);
            
            const filteredPlayers = players.filter(player => !helper.playerIsIncludeInTheList(player, confirmedPlayers));
    
            console.log(`****  - filteredPlayers:  ${ JSON.stringify(filteredPlayers) }`);
    
            this.setState({
                confirmedPlayers: confirmedPlayers,
                players: filteredPlayers,
                gameConfirmed: ( status === "CONFIRMED" ),
                buttonConfirmGame: ( status === "CONFIRMED" ),
                gameSuspended: ( status === "SUSPENDED" ),
                isAdmin: (userRole === "ADMIN")
            });
        }
    }


    handleConfirmPlayer = async (playerConfirm) => {
        console.log(`****  PLAYER:  ${playerConfirm}`);

        const { players, confirmedPlayers, gameDate, gameSuspended } = this.state;
        var areTen = confirmedPlayers.length === 9;
        
        if(confirmedPlayers.length < 10 && !gameSuspended){
            const updateAvailables = players.filter( player => {
                return player.name !== playerConfirm.name
            });
    
            this.setState({
                players: updateAvailables,
                confirmedPlayers: [...confirmedPlayers, playerConfirm],
                tenPlayersConfirmed: areTen
            });
            this.handleUpdateGamePlayers(gameDate, [...confirmedPlayers, playerConfirm]);
        }
        console.log(`****  ARE TEN:  ${areTen}`);
    }


    handleGetOffTheList = async (player) => {
        //console.log(`****  PLAYER:  ${ JSON.stringify(player) }`);

        const { players, confirmedPlayers, gameDate, gameConfirmed, gameSuspended } = this.state;
        
        if(!gameConfirmed && !gameSuspended){

            const updatedConfirmedPlayer = confirmedPlayers.filter( confirmed => {
                return confirmed._id !== player._id
            });
    
            this.setState({
                players: [...players, player],
                confirmedPlayers: updatedConfirmedPlayer,
                buttonConfirmGame: false
            });

            this.handleUpdateGamePlayers(gameDate, updatedConfirmedPlayer);
        }

    }


    handleUpdateGamePlayers = async (date, confirmedPlayers) => {
        const { group } = this.props;
        const result = gameService.updateGamePlayers(group, date, confirmedPlayers);
        console.log(`****  result:  ${ result }`);
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

        const { gameConfirmed } = this.state;

        if(!gameConfirmed){

            this.setState({
                gameConfirmed: true
            })
            const { group } = this.props;
            const { gameDate } = this.state;
            const result = gameService.confirmGame(group, gameDate);
            console.log(`****  handleConfirmGame  result:  ${ result }`);
        }
    }


    handleSuspendGame = () => {

        const { gameSuspended } = this.state;

        if(!gameSuspended){

            this.setState({
                gameSuspended: true
            })
            const { group } = this.props;
            const { gameDate } = this.state;
            const result = gameService.suspendGame(group, gameDate);
            console.log(`****  handleSuspendGame  result:  ${ result }`);
        }
    }


    effectWhistle = () => {
        //silbato.play();
        setTimeout(function() {
            
            document.getElementById('audio_whistle').play();

        }, 2000);
    }


    effectBoo = () => {
        //silbato.play();
        setTimeout(function() {
            
            document.getElementById('audio_boo').play();

        }, 2000);
    }


    handleDate = () => {
        const { gameDate } = this.state;

        console.log(`****  handleDate  gameDate:  ${ gameDate }`);
        return gameDate;
    }


 
    render(){
        console.log("render");
        const { players, confirmedPlayers, tenPlayersConfirmed, buttonConfirmGame, isAdmin, gameConfirmed, gameSuspended, gameDate } = this.state;
        const { userEmail, day } = this.props;
       // console.log(`****  PlayerList  render  userEmail:  ${ JSON.stringify(userEmail) }`);
       const dateToButton = ":     " + helper.formatDateToFront(gameDate);//toISOString();//(gameDate);
       console.log(`****  render  dateToButton:  ${ dateToButton }`);

        return(
            <div className="App">
                    <audio id="audio_whistle" ><source src={whistle} type="audio/mp3" ></source></audio>
                    <audio id="audio_boo" ><source src={boo} type="audio/mp3" ></source></audio>

                    <div style={{display: "inline-flex", justifyContent: "space-between", width: "90%", fontFamily: "fantasy", fontSize: "xx-large"}}>
                        <h1>JUGADORES DISPONIBLES</h1>
                        <div>
                             {/* buttonConfirmGame */}
                            {
                                confirmedPlayers.length === 10 

                                                 ? <ConfirmGame confirm={this.handleConfirmGame}
                                                                 effect={this.effectWhistle} 
                                                                 statusConfirmed={gameConfirmed} 
                                                                 dateToButton={dateToButton} /> 

                                                  : <SuspendGame suspend={this.handleSuspendGame}
                                                                 effect={this.effectBoo}
                                                                 statusSuspended={gameSuspended} 
                                                                 dateToButton={dateToButton} /> 
                            }

                        { true ? <FormHelperText style={{display: "inline-flex", color: "black", textDecorationLine: "underline", fontSize: "x-large", fontFamily: "fantasy", width: "max-content"}}><strong> FECHA{dateToButton} </strong></FormHelperText> : ""}
                        </div>
                        <h1>JUGADORES CONFIRMADOS</h1>
                    </div>
                    
                    <br/><br/>

                        {
                            players.length === 0 && confirmedPlayers.length === 0
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
                            players.length > 0 || confirmedPlayers.length > 0    //players.length === 0 && confirmedPlayers === 0    
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