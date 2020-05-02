import React, { Component, Fragment } from 'react';



class GlobalState extends Component {


    constructor(props){

        super(props)

        this.state = {

            authOK: false,
            userEmail: "",
            userRole: ""
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



    render(){

        return(
                <Fragment> 
                    {
                        React.cloneElement(this.props.children, 
                                                {...this.state, 
                                                    authorize: this.userAuthorized, 
                                                    logger: this.loggedEmail,
                                                    role: this.loggedUserRole })
                    }
                </Fragment>
            )
    

    }


}

export default GlobalState;