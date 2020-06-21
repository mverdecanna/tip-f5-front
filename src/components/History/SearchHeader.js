import React, { Component } from 'react';
import './searchHeaderStyles.css';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DatePicker from './DatePicker/DatePicker';
import { Grid, Container } from '@material-ui/core';
import FormGame from './FormGame';
import gameService from '../../services/GameService';
import helper from '../../util/Helper';
import ButtonWithIcon from './ButtonWithIcon';
//import Snackbar from './CustomSnackbar';


class SearchHeader extends Component {

    
    constructor(props){
        super(props);
        
        const { userRole } = this.props;

        this.state = {
            searchDate: null,
            teamA: [],
            teamB: [],
            hasResult: false,
            result: '',
            text: '',
            activeSave: false,
            readOnly: userRole !== "ADMIN",
            typeOK: true,
        };
    }


    componentWillMount(){
        const date = helper.getDateOfThePreviousGame(2); // 2 = martes

        this.handleDateOfTheSearchedGame(date);
    }


    handleDateOfTheSearchedGame = (date) => {
        console.log(`**** handleDateOfTheSearchedGame  date:  ${ JSON.stringify(date) }`);
        //const date = "2020-05-19T03:00:00.000Z";

        this.setState({
            searchDate: date,
            teamA: [],
            teamB: [],
            hasResult: false,
            result: '',
            text: '',
        });
        this.handleSearchedGame(date);
    }


    handleSearchedGame = async (searchDate) => {
        const { group, role, userRole } = this.props;
        //const { searchDate } = this.state;
        console.log(`**** handleSearchedGame  group:  ${ JSON.stringify(group) }`);
        console.log(`**** handleSearchedGame  role:  ${ JSON.stringify(role) }`);
        console.log(`**** handleSearchedGame  userRole:  ${ JSON.stringify(userRole) }`);
        console.log(`**** handleSearchedGame  searchDate:  ${ JSON.stringify(searchDate) }`);

        const game = await gameService.getNextGame(group, searchDate);
        console.log(`*-*-*-*  handleSearchedGame  game:  ${ JSON.stringify(game) }`);

        if( game && game.data && game.data.status !== "PLAYED" ){

            if( game.data.status === "SUSPENDED" ){

                this.setState({
                    text: "EL PARTIDO FUE SUSPENDIDO!!"
                });

            }else{
                console.log(`*-*-*-*  handleSearchedGame  entro al else  game.data :  ${ JSON.stringify(game.data) }`);

                const { confirmedPlayers } = game.data;
    
                this.setState({
                    teamA: confirmedPlayers,
                });
            }

        }else{
            console.log(`*-*-*-*  handleSearchedGame  entro al ELSE game.data :  ${ JSON.stringify(game.data) }`);

            if( game && game.data){

                const { teamA, teamB, result, details } = game.data;
    
                this.setState({
                    teamA: teamA,
                    teamB: teamB,
                    result: result,
                    hasResult: true,
                    text: details,
                });
            }else{

                this.setState({
                    text: "NO ORGANIZAMOS PARTIDO PARA ESTA FECHA!!"
                });
            }
        }
    }
    
    
    handlePassToTeamB = async (player) => {

        const { teamA, teamB } = this.state;

        const updatedTeamA = teamA.filter( playerA => {
            return playerA._id !== player._id
        });

        this.setState({
            teamA: updatedTeamA,
            teamB: [...teamB, player],
            activeSave: true
        });
    }


    handlePassToTeamA = async (player) => {

        const { teamA, teamB } = this.state;

        const updatedTeamB = teamB.filter( playerB => {
            return playerB._id !== player._id
        });

        this.setState({
            teamA: [...teamA, player],
            teamB: updatedTeamB,
            activeSave: true
        });
    }


    handleSetResult = async (result) => {

        const description = helper.formatResult(result);
        console.log(`****  description:  ${ description }`);

        this.setState({
            result: description,
            activeSave: true
        });
    }
    
    
    handleSetHasResult = async (has) => {

        this.setState({
            hasResult: has
        });
    }
    
    
    handleSetText = (text) => {

        console.log(`****  text:  ${ text }`);
        
        this.setState({
            text: text,
            activeSave: true
        })
    }
    
    handleButtonSave = async () => {

        const { group } = this.props;
        const { teamA, teamB, text, result, searchDate } = this.state;
        console.log(`**** handleButtonSave  teamA:  ${ teamA }`);
        console.log(`**** handleButtonSave  teamB:  ${ teamB }`);
        console.log(`**** handleButtonSave  text:  ${ text }`);
        console.log(`**** handleButtonSave  result:  ${ result }`);
        console.log(`**** handleButtonSave  group:  ${ group }`);
        console.log(`**** handleButtonSave  searchDate:  ${ searchDate }`);

        try{

            const response = await gameService.updateDataOfTheGame(group, searchDate, teamA, teamB, result, text);
            console.log(`**** handleButtonSave response:  ${ JSON.stringify(response) }`);

            if( response && response.status === 200 ){

                this.handleResultUpdate(true);
                this.handleChangeActiveSave(false);
            }

        }catch(e){
            this.handleResultUpdate(false);
            console.log(`****  update history ERROR:  ${ e }`);
        }
        const { activeSave } = this.state;
        console.log(`*-*-*-*  handleButtonSave  activeSave:  ${ activeSave }`);
    }


    handleChangeActiveSave = (value) => {

        this.setState({
            activeSave: value
        })
    }


    // handleSnackbar = () => {
    // }


    handleResultUpdate = (result) => {

        this.setState({
            typeOK: result
        });

    }


    // handleCleanCheckbox = () => {

    //     () => this.refs.form.cleanCheckbox();

    // }


    // handleSelectedDateFrom = date => {
    //     //this.props.actions.setSelectedDateFrom(date);
    // };


    // handleSelectedDateTo = date => {
    //     //this.props.actions.setSelectedDateTo(date);
    // };


    // handleSearchButton = event => {
    //     //this.props.onFetchData();
    // };




    render() {

        const { teamA, teamB, hasResult, result, text, activeSave, readOnly, typeOK } = this.state;

        return (

                <Container display="flex" >
                    <div style={{display: "table-cell", justifyContent: "space-between", width: "90%", fontFamily: "monospace", fontSize: "xx-large", backgroundColor: "#e3ffdc"}}>

                            <DatePicker setDate={this.handleDateOfTheSearchedGame} />
                    </div>

                        {/* <Grid container xs={12} md={6}> */}
                        <Grid >

                            <FormGame 
                                teamA={teamA} 
                                teamB={teamB} 
                                passTeamB={this.handlePassToTeamB}
                                passTeamA={this.handlePassToTeamA}
                                setHasResult={this.handleSetHasResult}
                                setResult={this.handleSetResult}
                                setText={this.handleSetText}
                                validationButton={teamA.length >= 5 && teamB.length >= 5 && hasResult && activeSave}
                                result={result}
                                text={text}
                                save={this.handleButtonSave}
                                readOnly={readOnly}
                                //resultUpdate={this.handleSnackbar}
                                typeMessageOK={typeOK}
                                //cleanCheckbox={this.handleCleanCheckbox}
                            />

                        </Grid>

                </Container>

        );
    }
}



export default SearchHeader;