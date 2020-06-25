import React, { Component } from 'react';
import './loginStyles.css';
import FormLogin from './FormLogin';
import UserService from '../../services/UserService';
import f5_redondo from '../../images/logo_redondo.png';
import Helper from '../../util/Helper';

//const winstonLogger = require('../../config/winston');


class Login extends Component {

    constructor(props){

        super(props);

        this.doLogin = this.doLogin.bind(this);

        this.doRegistration = this.doRegistration.bind(this);

        this.state = {
            loginError: false,
            loading: false
        }
    }


    componentWillMount() {

        const { authOK } = this.props;
        console.log(`****  Login  componentWillMount  authOK:  ${ JSON.stringify(authOK) }`);
    
        if(authOK){
    
          //this.props.router.push('/home');
          this.props.router.push('/group');
    
        }
    }



    doRegistration = () => {

        this.props.router.push('/registration');
    }


    
    doLogin = async ({username, password}) => {

        //console.log(`****  group:  ${ JSON.stringify(group) }`);

        this.setState({
            loading: true
        });

        if( Helper.validLoginInputs(username, password) ){

            //const { authorize, logger, role, grouping } = this.props;
            const { authorize, logger } = this.props;
    
            const user = await UserService.loginUser(username, password);
    
            if( user.email ){
                console.log(`****  doLogin -->  user:  ${ JSON.stringify(user) }`);
    
                authorize();
    
                console.log(`****  user.email:  ${ JSON.stringify(user.email) }`);
                logger(user.email);
    
                //role(user.role);

                //grouping(group);
    
                //this.props.router.push('/');
                this.props.router.push('/group');
                
            }else{
                console.log(`****  user ELSE:  ${ JSON.stringify(user) }`);
                this.setState({
                    loginError: true,
                    loading: false
                })
            }
        }else{
            this.setState({
                loginError: true,
                loading: false
            })
        }
    }



    render() {
        const { loginError, loading } = this.state;
        console.log(`**** Login  render :  ${ JSON.stringify(loginError) }`);

        return (

            <div id="LoginForm">
                <div className="container">
                <div style={{display: "inline-flex", justifyContent: "space-between", width: "99%", fontFamily: "fantasy", fontSize: "xx-large"}}>
                    <h1 className="form-heading" style={{fontSize: "38px"}}>F5</h1>
                    <img src={f5_redondo}  alt="logo" width="52px" />
                </div>    
                    <FormLogin doLogin={this.doLogin} loginError={loginError} loading={loading} doRegistration={this.doRegistration}></FormLogin>
                   
                </div> 
            </div>

        );
    }
}


export default Login;