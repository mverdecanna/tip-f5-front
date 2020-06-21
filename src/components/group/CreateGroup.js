import React, { Component } from 'react';
import './createGroupStyle.css';
import FormCreateGroup from '../group/FormCreateGroup';
import GroupService from '../../services/GroupService';
import f5_redondo from '../../images/logo_redondo.png';
import Helper from '../../util/Helper';

//const winstonLogger = require('../../config/winston');


class CreateGroup extends Component {

    constructor(props){

        super(props);

        this.checkGroupId = this.checkGroupId.bind(this);

        //this.doCreateGroup = this.doCreateGroup.bind(this);

        this.state = {
            invalidName: true,
            groupName: "",
            inputEmail: "",
            invalidEmail: true,
            emailList: [],
            daySelected: "",
            createOK: true,
            //readyToCreate: false
            //loginGroupError: false,
            //loadingGroup: false
        }
    }

    // componentWillMount() {
    //     const { authOK } = this.props;
    //     console.log(`****  Login  componentWillMount  authOK:  ${ JSON.stringify(authOK) }`);
    
    //     if(authOK){
    //       this.props.router.push('/home');
    //     }
    // }


    setCreateOK = (value) => {

        this.setState({
            createOK: value
        });
    }


    setDaySelected = (value) => {

        console.log(`**** setDaySelected  value :  ${ value }`);

        this.setState({
            daySelected: value
        });        
    }


    setInputEmail = async (value) => {

        this.setState({
            inputEmail: value,
        });
        this.checkInputEmail(value);
     }


    addEmailToList = async () => {

        const { emailList, inputEmail, invalidEmail } = this.state;

        console.log(`**** addEmailToList  emailList :  ${ emailList }`);
        console.log(`**** addEmailToList  inputEmail :  ${ inputEmail }`);

        if( !invalidEmail && !emailList.includes(inputEmail) ){

            this.setState({
                emailList: [...emailList, inputEmail],
            });
        }
        this.setInputEmail("");
    }


    removeEmailToList = async (email) => {

        const { emailList } = this.state;

        console.log(`**** removeEmailToList  emailList :  ${ emailList }`);
        console.log(`**** removeEmailToList  email :  ${ email }`);

        const updatedEmailList = emailList.filter( e => {
            return e !== email
        });
        console.log(`**** removeEmailToList  updatedEmailList :  ${ updatedEmailList }`);

        this.setState({
            emailList: updatedEmailList
        });
    }


    setGroupName = async (value) => {

        this.setState({
            groupName: value
        });
    }


    checkGroupId = async (value) => {

        const result = await GroupService.validateName(value);

        if(result && result.data === "VALID"){

            this.setState({
                invalidName: false
            });
        }else{

            this.setState({
                invalidName: true
            });
        }
    }


    checkInputEmail = (value) => {

        if( value.length > 6 && 
            value.includes('@') &&
            value.includes('.com') ){

                this.setState({
                    inputEmail: value,
                    invalidEmail: false
                });        

        }else{

            this.setState({
                inputEmail: value,
                invalidEmail: true
            });    
        }
    }


    cancelAndBack = () => {

        this.setState({
            invalidName: true,
            groupName: "",
            inputEmail: "",
            invalidEmail: true,
            emailList: [],
            daySelected: ""
        });

        this.props.router.push('/login');
    }


    create = async () => {

        const { userEmail } = this.props;
        console.log(`*-*-*-*-*-*-*-*   create    userEmail :  ${ userEmail }`);

        const { groupName, emailList, daySelected } = this.state;

        try{

            const response = await GroupService.create(groupName, daySelected, userEmail, emailList);
            console.log(`*-*-*-*-*-*-*-*  createGroup  create    RESPONSE :  ${ JSON.stringify(response) }`);
            
            if( response && response.status === 200 ){
                console.log(`*-*-*-*-*-*-*-*  createGroup  entro al IF  :  ${ JSON.stringify(response) }`);
    
                this.props.router.push('/login');

            }else{
    
                this.setCreateOK(false);
            }
            
        }catch(e){
            
            this.setCreateOK(false);
            console.log(`*******   create   ERROR:  ${ e }`);
        }
    }



    render() {
        const { invalidName, groupName, inputEmail, invalidEmail, emailList, daySelected, createOK } = this.state;

        return (

            <div id="CreateGroupForm">
                <div className="container">
                <div style={{display: "inline-flex", justifyContent: "space-between", width: "99%", fontFamily: "fantasy", fontSize: "xx-large"}}>
                    <h1 className="form-heading" style={{fontSize: "38px"}}>F5</h1>
                    <img src={f5_redondo}  alt="logo" width="52px" />
                </div>    
                    <FormCreateGroup checkGroupId={this.checkGroupId} invalidName={invalidName} groupName={groupName} inputEmail={inputEmail} 
                        setGroupName={this.setGroupName} setInputEmail={this.setInputEmail} addEmailToList={this.addEmailToList} invalidEmail={invalidEmail}
                        emailList={emailList} removeEmailToList={this.removeEmailToList} setDaySelected={this.setDaySelected} cancelAndBack={this.cancelAndBack}
                        readyToCreate={ !invalidName && daySelected && daySelected !== "" } createOK={createOK} create={this.create}/>
                   
                </div> 
            </div>

        );
    }
}


export default CreateGroup;