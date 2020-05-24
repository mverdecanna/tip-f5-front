import axios from 'axios';

const { host_backend, 
        endpoint_login,
        tokenKey } = require("../config/keys");




    const loginUser = async ( username, password, group ) => {

        const endpoint = host_backend + endpoint_login;

        var user = {};

        console.log(`****  tokenKey:  ${ tokenKey }`);

        const result = await axios.post(endpoint, { data: {
                                                    email: username,
                                                    password: password,
                                                    group: group
                                                    }
                                                 }, {
                                        headers: {
                                            'TOKEN': tokenKey,
                                            'Content-Type': 'application/json'
                                        }
        })
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



    const UserService = {
        loginUser
    };
    
    export default UserService;


