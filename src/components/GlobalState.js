import React, { Component, Fragment } from 'react';
import userService from '../services/UserService';
import groupService from '../services/GroupService';


class GlobalState extends Component {


    constructor(props){

        super(props)

        this.state = {

            authOK: false,
            userEmail: "",
            userRole: "",
            group: "",
            day: null,
            creationDate: null,
        }
    }


    async componentWillMount() {

        await this.evalInit();

    }


    evalInit = async () => {

        const user = await userService.currentUser();
        console.log(`****  GlobalState  evalInit  user:  ${ JSON.stringify(user) }`);

        if( user && user.email && user.groupId ){

            const group = await groupService.currentGroup(user.groupId, user.email);
            console.log(`****  GlobalState  evalInit  group:  ${ JSON.stringify(group) }`);

            this.setState({
                authOK: true,
                userEmail: user.email,
                userRole: group.role,
                group: group.groupId,
                day: group.day,
                creationDate: group.creationDate,
            });
        }else{
            
            this.props.router.push('/login');

        }
    }



    userAuthorized = () => {

        this.setState({
            authOK: true
        });
    }


    loggedEmail = (email) => {

        this.setState({
            userEmail: email
        })
    }


    loggedUserRole = (role) => {

        this.setState({
            userRole: role
        });
    }

    
    loggedGroup = (group) => {

        this.setState({
            group: group
        });
    }


    closeSession = () => {

        this.setState({
            authOK: false
        })
    }


    getGlobalDay = () => {

        const { day } = this.state;
        console.log(`****  GlobalState  getGlobalDay  day:  ${ day }`);

        return day;
    }


    setGlobalDay = (day) => {

        this.setState({
            day: day
        });
    }


    getCreationDate = () => {

        const { creationDate } = this.state;
        console.log(`****  GlobalState  getCreationDate  creationDate:  ${ creationDate }`);

        return creationDate;
    }


    setCreationDate = (date) => {

        this.setState({
            creationDate: date
        });
    }



    render(){

        return(
                <Fragment> 
                    {
                        React.cloneElement(this.props.children, 
                                                {...this.state, 
                                                    authorize: this.userAuthorized, 
                                                    logger: this.loggedEmail,
                                                    role: this.loggedUserRole,
                                                    grouping: this.loggedGroup,
                                                    logout: this.closeSession,
                                                    getGlobalDay: this.getGlobalDay,
                                                    setGlobalDay: this.setGlobalDay,
                                                    getCreationDate: this.getCreationDate,
                                                    setCreationDate: this.setCreationDate
                                                })
                    }
                </Fragment>
            )
    

    }


}

export default GlobalState;