import axios from 'axios';

const { host_backend, 
        endpoint_login,
        tokenKey } = require("../config/keys");




    const loginUser = async ( username, password ) => {

        const endpoint = host_backend + endpoint_login;
        //const endpoint = "http://068742ee.ngrok.io/api/getAllPlayers";

        console.log(`****  tokenKey:  ${ tokenKey }`);

        const user = await axios.post(endpoint, { data: {
                                                    email: username,
                                                    password: password
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

        console.log(`***********--  USER:  ${ JSON.stringify(user.data) }`);

        return user.data;
    }



    const UserService = {
        loginUser
    };
    
    export default UserService;


