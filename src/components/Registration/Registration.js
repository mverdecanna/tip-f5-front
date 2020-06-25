import React, { Component } from 'react';
import './registrationStyle.css';
import FormRegistration from '../Registration/FormRegistration';
import UserService from '../../services/UserService';
import f5_redondo from '../../images/logo_redondo.png';
import Helper from '../../util/Helper';

//const winstonLogger = require('../../config/winston');


class Registration extends Component {

    constructor(props){

        super(props);

        this.state = {
            registrationEmail: "",
            registrationNickname: "",
            registrationName: "",
            registrationSurname: "",
            registrationPassword: "",
            registrationBirthday: null,
            registrationTeam: "",
            registrationOK: true,
            invalidEmail: true,
            invalidPassword: true,
            errorMessage: "Registración exitosa!",
        }
    }
    


    setRegistrationEmail = async (value) => {

        this.setState({
            registrationEmail: value,
        });
        this.checkInputEmail(value);
     }


    checkInputEmail = (value) => {

        if( value.length > 6 && 
            value.includes('@') &&
            value.includes('.com') ){

                this.setState({
                    registrationEmail: value,
                    invalidEmail: false
                });        

        }else{

            this.setState({
                registrationEmail: value,
                invalidEmail: true
            });
        }
    }


    setRegistrationNickname = async (value) => {

        this.setState({
            registrationNickname: value,
        });
     }


    setRegistrationName = async (value) => {

        this.setState({
            registrationName: value,
        });
     }


    setRegistrationSurname = async (value) => {

        this.setState({
            registrationSurname: value,
        });
     }


     setRegistrationPassword = async (value) => {

        this.setState({
            registrationPassword: value,
        });
        this.checkInputPassword(value);
     }


     checkInputPassword = (value) => {

        if( value.length >= 7 ){

                this.setState({
                    registrationPassword: value,
                    invalidPassword: false
                });        

        }else{

            this.setState({
                registrationPassword: value,
                invalidPassword: true
            });
        }
    }

     

    setRegistrationBirthday = async (value) => {

        console.log(`**** setRegistrationBirthday  value :  ${ JSON.stringify(value) }`);
 
         this.setState({
            registrationBirthday: value,
         });
    }
      
      
    setRegistrationTeam = async (value) => {
 
         //console.log(`**** setRegistrationTeam  value :  ${ value }`);
  
          this.setState({
            registrationTeam: value,
          });
    }
      

    cancelRegistrationAndBack = () => {

        const { logout } = this.props;

        this.setState({
            registrationEmail: "",
            registrationNickname: "",
            registrationName: "",
            registrationSurname: "",
            registrationPassword: "",
            registrationBirthday: null,
            registrationTeam: "",
            registrationOK: true,
            invalidEmail: true,
        });

        logout();

        this.props.router.push('/login');
        //this.forwardToLoginPage();
    }



    setRegistrationOK = (value) => {

        this.setState({
            registrationOK: value
        });
    }

    
    setErrorMessage = (value) => {

        this.setState({
            errorMessage: value
        });
    }



    registrate = async () => {

        const { registrationEmail, registrationNickname, registrationName, registrationPassword,
                registrationSurname, registrationBirthday, registrationTeam } = this.state;

        console.log(`*-*-*-*-*-*-*-*   registrate    registrationEmail :  ${ registrationEmail }`);
        console.log(`*-*-*-*-*-*-*-*   registrate    registrationNickname :  ${ registrationNickname }`);
        console.log(`*-*-*-*-*-*-*-*   registrate    registrationName :  ${ registrationName }`);
        console.log(`*-*-*-*-*-*-*-*   registrate    registrationSurname :  ${ registrationSurname }`);
        console.log(`*-*-*-*-*-*-*-*   registrate    registrationPassword :  ${ registrationPassword }`);
        console.log(`*-*-*-*-*-*-*-*   registrate    registrationBirthday :  ${ registrationBirthday }`);
        console.log(`*-*-*-*-*-*-*-*   registrate    registrationTeam :  ${ registrationTeam }`);


        try{

            const response = await UserService.registerUser(registrationEmail, registrationNickname, registrationName,
                                                            registrationSurname, registrationBirthday, registrationTeam, registrationPassword);

            console.log(`*-*-*-*-*-*-*-*  registrate  service   RESPONSE :  ${ JSON.stringify(response) }`);
            
            if( response && response.status === 200 ){
                console.log(`*-*-*-*-*-*-*-*  registrate  entro al IF  :  ${ JSON.stringify(response) }`);

                
                this.setErrorMessage("Registración exitosa!");

                setTimeout(
                    function() {

                        this.forwardToLoginPage();

                    }
                    .bind(this), 
                    2000
                );

            }else{
    
                this.setRegistrationOK(false);
                this.setErrorMessage("error 1");
            }
            
        }catch(e){
            
            this.setRegistrationOK(false);
            this.setErrorMessage("error 2");
            console.log(`*******   registrate   ERROR:  ${ e }`);
        }
    }


    forwardToLoginPage = async () => {

        this.props.router.push('/login');
    }



    render() {
        const { registrationEmail, invalidEmail, registrationNickname, registrationName, registrationSurname, errorMessage,
                registrationOK, registrationBirthday, registrationTeam, registrationPassword, invalidPassword } = this.state;

        return (

            <div id="RegistrationForm">
                <div className="container">
                <div style={{display: "inline-flex", justifyContent: "space-between", width: "99%", fontFamily: "fantasy", fontSize: "xx-large"}}>
                    <h1 className="form-heading" style={{fontSize: "38px"}}>F5</h1>
                    <img src={f5_redondo}  alt="logo" width="52px" />
                </div>    
                    <FormRegistration setRegistrationEmail={this.setRegistrationEmail} registrationEmail={registrationEmail} invalidEmail={invalidEmail}
                        setRegistrationNickname={this.setRegistrationNickname} registrationNickname={registrationNickname}
                        setRegistrationName={this.setRegistrationName} registrationName={registrationName}
                        setRegistrationSurname={this.setRegistrationSurname} registrationSurname={registrationSurname}
                        setRegistrationBirthday={this.setRegistrationBirthday} setRegistrationTeam={this.setRegistrationTeam}
                        cancelRegistrationAndBack={this.cancelRegistrationAndBack} registrationOK={registrationOK}
                        readyToRegistration={ !invalidEmail && registrationBirthday && registrationNickname !== "" && registrationName !== "" 
                                              && registrationSurname !== "" && registrationTeam && registrationTeam !== "" && !invalidPassword }
                        setRegistrationPassword={this.setRegistrationPassword} registrationPassword={registrationPassword} invalidPassword={invalidPassword}
                        registrate={this.registrate} errorMessage={errorMessage}
                    />


                </div> 
            </div>

        );
    }
}


export default Registration;