import axios from 'axios';

const { host_backend, 
        endpoint_login,
        endpoint_currentUser,
        endpoint_logout,
        endpoint_register,
        tokenKey } = require("../config/keys");




    const loginUser = async ( username, password, group ) => {

        const endpoint = host_backend + endpoint_login;

        var user = {};

        console.log(`****  tokenKey:  ${ tokenKey }`);

        const result = await axios.post(endpoint, { 
                                                    email: username,
                                                    password: password,
                                                    //group: group
                                                    
                                                 }, {
                                        headers: {
                                            'TOKEN': tokenKey,
                                            'Content-Type': 'application/json'
                                        }
        }, {withCredentials: true})
        // const user = await axios.post(endpoint, {
        //                     params: {
        //                         username: username,
        //                         password: password
        //                     }
        //                  })

        .catch(function(error){
            console.log(error);
            //result = 'ERROR';
        });

        console.log(`***********--  USER data:  ${ JSON.stringify(user.data) }`);
        if(result && result.data){
            user = result.data;
        }

        console.log(`***********--  USER:  ${ JSON.stringify(user) }`);

        return user;
    }



    const currentUser = async () => {

        const endpoint = host_backend + endpoint_currentUser;

        var user = {};

        const result = await axios.get(endpoint)

        console.log(`***********--  RESULT:  ${ JSON.stringify(result) }`);
        if(result && result.data){
            user = result.data;
        }

        console.log(`***********--  USER:  ${ JSON.stringify(user) }`);

        return user;
    }



    const logoutUser = async () => {

        const endpoint = host_backend + endpoint_logout;

        const result = await axios.get(endpoint)

        console.log(`***********-- logout RESULT:  ${ JSON.stringify(result) }`);

        return result;
    }



    const registerUser = async (email, nickname, name, surname, birthday, team, password) => {

        const endpoint = host_backend + endpoint_register;

        var result = await axios.post(endpoint, {   data: {
                                                        email: email,
                                                        nickname: nickname,
                                                        name: name,
                                                        surname: surname,
                                                        birthday: birthday,
                                                        team: team,
                                                        password: password
                                                      }
                                                    }, {
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        }
                                                    }, {withCredentials: true})

        .catch(function(error){
            console.log(`***********-- registerUser CATCH error:  ${ JSON.stringify(error) }`);
            if(error.message && error.message.includes("409")){
                console.log(`***********-- registerUser seeeeeeeeeeeeeeeeee:  ${ JSON.stringify(error) }`);
                result = {
                    status: 409
                }
                console.log(`***********-- registerUser seeeeeeeeeeeeeeeeee:  ${ JSON.stringify(result) }`);
                return result;
            }
        });

        console.log(`***********-- registerUser RESULT:  ${ JSON.stringify(result) }`);

        return result;
    }



    const UserService = {
        loginUser,
        currentUser,
        logoutUser,
        registerUser
    };
    
    export default UserService;


