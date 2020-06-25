import React, { Component } from 'react';
import './formRegistrationStyle.css';
import InputRegistrationEmail from './InputRegistrationEmail';
import InputNickname from './InputNickname';
import InputRegistrationName from './InputRegistrationName';
import InputRegistrationSurname from './InputRegistrationSurname';
//import BirthdaySelector from './BirthdaySelector__';
import BirthdaySelector from './BirthdaySelector';
import InputFootballTeam from './InputFootballTeam';
import InputRegistrationPassword from './InputRegistrationPassword';
import InputRegistrationConfirmPassword from './InputRegistrationConfirmPassword';
import InputFootballTeam22 from './InputFootballTeam22';
import { Grid, Container } from '@material-ui/core';
import ButtonCancelRegistrationWithIcon from './ButtonCancelRegistrationWithIcon';
import ButtonSaveRegistrationWithIcon from './ButtonSaveRegistrationWithIcon';

//import Effect from './Effect';




const FormRegistration = (props) => {

    //const { loginGroupError, loadingGroup } = props;
    //const { invalidName, groupName, inputEmail, invalidEmail, emailList, readyToCreate, createOK } = props;

    const { registrationEmail, invalidEmail, registrationNickname, registrationName, registrationSurname,
            registrationOK, readyToRegistration, registrationPassword, invalidPassword, errorMessage } = props;

    


    const handlerRegistrationEmail = (value) => {
        props.setRegistrationEmail(value);
    }
    
    
    const handlerRegistrationNickname = (value) => {
        props.setRegistrationNickname(value);
    }


    const handlerRegistrationName = (value) => {
        props.setRegistrationName(value);
    }


    const handlerRegistrationSurname = (value) => {
        props.setRegistrationSurname(value);
    }

    
    const handlerRegistrationPassword = (value) => {
        props.setRegistrationPassword(value);
    }


    const handlerRegistrationBirthday = (value) => {
        props.setRegistrationBirthday(value);
    }


    const handlerRegistrationTeam = (team) => {
        props.setRegistrationTeam(team)
    }


    const handlerCancel = () => {
        props.cancelRegistrationAndBack()
    }


    const onClickRegistration = () => {
        props.registrate();
    }



    
    return (
        <div className="registration-form">
            <div className="main-div">
                <div className="panel">
                    <h2 style={{fontFamily: "fantasy", fontSize: "xx-large",  }} >
                        Registrate
                    </h2>
                </div>

                <br/>
                {/* <br/> */}

                <div id="Registration">

                    <div className="form-group" style={{display: "inline-flex", justifyContent: "space-between", width: "100%", fontFamily: "fantasy" }} >

                            <InputRegistrationEmail handlerRegistrationEmail={handlerRegistrationEmail} registrationEmail={registrationEmail} invalidEmail={invalidEmail} />
                        
                            <InputNickname handlerRegistrationNickname={handlerRegistrationNickname} registrationNickname={registrationNickname}/>

                    </div>


                    <div className="form-group" style={{display: "inline-flex", justifyContent: "space-between", width: "100%", fontFamily: "fantasy" }} >

                            <InputRegistrationName handlerRegistrationName={handlerRegistrationName} registrationName={registrationName}/>

                            <InputRegistrationSurname handlerRegistrationSurname={handlerRegistrationSurname} registrationSurname={registrationSurname}/>
                    </div>



                    <br/>
                   


                    <div className="form-group" style={{display: "inline-flex", justifyContent: "space-between", width: "105%", fontFamily: "fantasy" }} >

                        <div>
                        <InputRegistrationConfirmPassword  handlerRegistrationPassword={handlerRegistrationPassword} 
                                                            registrationPassword={registrationPassword} invalidPassword={invalidPassword} />
                            
                        </div>

                        <div style={{display: "inline-flex", justifyContent: "space-between", width: "48%", fontFamily: "fantasy" }} >
                        <BirthdaySelector handlerRegistrationBirthday={handlerRegistrationBirthday} />

                        </div>


                    </div>

                    <br/>
                    <br/>

                    <div>

                        <InputFootballTeam handlerRegistrationTeam={handlerRegistrationTeam} />

                    </div>

                    

                    <br/>


                    <Container display="flex" >
                        <div style={{display: "inline-flex", justifyContent: "space-between", width: "80%",}} >

                            <ButtonCancelRegistrationWithIcon handlerCancel={handlerCancel} />

                            <ButtonSaveRegistrationWithIcon registrationOK={registrationOK} readyToRegistration={readyToRegistration} 
                                            onClickRegistration={onClickRegistration} errorMessage={errorMessage}/>                            

                        </div>
                    </Container>

                    


                    {/* {
                        loginGroupError ?
                        <div className="panel">
                            <p style={{color: 'red'}}>Acceso denegado. Verifique que pertenece al grupo ingresado.</p>
                        </div> :
                        <div></div>
                    }

                    <br/>

                    {
                        loadingGroup ? 
                            <Effect></Effect>
                            : <p></p>
                    } */}
                    
                </div>
            </div>
        </div>
    );
    
};

export default FormRegistration;