import React, { Component } from 'react';
import './postLoginStyle.css';
import FormPostLogin from './FormPostLogin';
import GroupService from '../../services/GroupService';
import f5_redondo from '../../images/logo_redondo.png';
import Helper from '../../util/Helper';

//const winstonLogger = require('../../config/winston');


class PostLogin extends Component {

    constructor(props){

        super(props);

        this.doLoginGroup = this.doLoginGroup.bind(this);

        this.doCreateGroup = this.doCreateGroup.bind(this);

        this.state = {
            loginGroupError: false,
            loadingGroup: false
        }
    }


    // componentWillMount() {

    //     const { authOK } = this.props;
    //     console.log(`****  Login  componentWillMount  authOK:  ${ JSON.stringify(authOK) }`);
    
    //     if(authOK){
    
    //       this.props.router.push('/home');
    
    //     }
    // }



    doCreateGroup = async () => {

        this.props.router.push('/createGroup');

    }


    
    doLoginGroup = async ({groupId}) => {

        console.log(`****  groupId:  ${ JSON.stringify(groupId) }`);

        this.setState({
            loadingGroup: true
        });

        const { userEmail } = this.props;

        console.log(`****  userEmail:  ${ JSON.stringify(userEmail) }`);

        if( groupId && userEmail ){

            const { role, grouping, setGlobalDay, setCreationDate } = this.props;
    
            const group = await GroupService.authorizedGroup(userEmail, groupId);
            console.log(`****  doLoginGroup  =>  group:  ${ JSON.stringify(group) }`);
    
            if( group.data ){
                console.log(`****  doLoginGroup -->  group:  ${ JSON.stringify(group.data) }`);
    
                console.log(`****  doLoginGroup -->  group.data.creationDate:  ${ JSON.stringify(group.data.creationDate) }`);
    
                role(group.data.role);

                grouping(group.data.groupId);

                setGlobalDay(group.data.day);

                setCreationDate(group.data.creationDate);
    
                this.props.router.push('/');
            }else{
                console.log(`****  group ELSE:  ${ JSON.stringify(group) }`);
                this.setState({
                    loginGroupError: true,
                    loadingGroup: false
                })
            }
        }else{
            this.setState({
                loginGroupError: true,
                loadingGroup: false
            })
        }
    }



    render() {
        const { loginGroupError, loadingGroup } = this.state;
        console.log(`**** Login  render :  ${ JSON.stringify(loginGroupError) }`);

        return (

            <div id="PostLoginForm">
                <div className="container">
                <div style={{display: "inline-flex", justifyContent: "space-between", width: "99%", fontFamily: "fantasy", fontSize: "xx-large"}}>
                    <h1 className="form-heading" style={{fontSize: "38px"}}>F5</h1>
                    <img src={f5_redondo}  alt="logo" width="52px" />
                </div>    
                    <FormPostLogin doLoginGroup={this.doLoginGroup} doCreateGroup={this.doCreateGroup}  loginGroupError={loginGroupError} loadingGroup={loadingGroup}></FormPostLogin>
                   
                </div> 
            </div>

        );
    }
}


export default PostLogin;