import React, { Component } from 'react';
import './formGameStyles.css';
import ListPlayersTeams from './ListPlayersTeams';
import DragAndDropList from './DragAndDropList';
import CheckboxResult from './CheckboxResult';
import TextField from './TextField';
import ButtonWithIcon from './ButtonWithIcon';


const FormGame = (props) => {

    const { teamA, teamB, passTeamB, passTeamA, setResult, validationButton,
             result, setText, text, setHasResult, save, readOnly } = props;

    console.log(`**** FormGame teamA:  ${ JSON.stringify(teamA) }`);




    // cleanCheckbox = () => {
    //     () => this.refs.checkbox.cleanData();
    // }


    return (
        <div className="game-form">
            <div className="game-div">
                {/* <div className="panel"> */}
                <div style={{display: "inline-flex", justifyContent: "space-between", width: "90%", fontFamily: "fantasy", fontSize: "xx-large"}}>

                    <h1>EQUIPO  A</h1>
                    <h1>EQUIPO  B</h1>

                </div>

                <div id="Login">

                    <div className="form-group">
                        {/* <input type="email" className="form-control" id="inputEmail" placeholder="Email" /> */}
                        {/* <ListPlayersTeams></ListPlayersTeams> */}
                        {/* <DragAndDropList></DragAndDropList> */}

                        <ListPlayersTeams teamA={teamA} teamB={teamB} passTeamB={passTeamB} passTeamA={passTeamA} readOnly={readOnly} ></ListPlayersTeams>
                    </div>

                    <div >

                        <CheckboxResult setResult={ setResult } result={result} setHasResult={setHasResult} readOnly={readOnly} />
                    </div>

                    <div>

                        <TextField text={text} setText={setText} readOnly={readOnly} />

                    </div>


                    <br></br>


                    <div>

                        <ButtonWithIcon validationButton={validationButton}  save={save} readOnly={readOnly} />

                    </div>


                </div>
                
            </div>
        </div>
    );

};

export default FormGame;