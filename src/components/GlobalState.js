import React, { Component, Fragment } from 'react';
import userService from '../services/UserService';


class GlobalState extends Component {


    constructor(props){

        super(props)

        this.state = {

            authOK: false,
            userEmail: "",
            userRole: "",
            group: ""
        }
    }


    async componentWillMount() {

        await this.evalInit();

    }


    evalInit = async () => {
        const user = await userService.currentUser();

        console.log(`****  GlobalState  componentWillMount  user:  ${ JSON.stringify(user) }`);

        if( user && user.email ){

            this.setState({
                authOK: true,
                userEmail: user.email,
                userRole: user.role,
                group: user.group
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
                                                    logout: this.closeSession
                                                })
                    }
                </Fragment>
            )
    

    }


}

export default GlobalState;