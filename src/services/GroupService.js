import axios from 'axios';


const { host_backend, 
        endpoint_authorizedGroup,
        endpoint_validateName,
        endpoint_currentGroup,
        endpoint_create } = require("../config/keys");




    const authorizedGroup = async (email, group) => {
    
        const endpoint = host_backend + endpoint_authorizedGroup;
        console.log(`*-*-*-*-*-*  authorizedGroup   endpoint:  ${endpoint}`);

        var data = {};

        const response = await axios.post(endpoint, {   data: {
                                                            email: email,
                                                            groupId: group,
                                                        }
                                                }, {
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }
    }, {withCredentials: true})

    .catch(function(error){
        console.log(error);
    });

        console.log(`****** authorizedGroup  RESPONSE:  ${JSON.stringify(response)}`);

        if(response){
            data = response;
        }

        return data;
    }



    const validateName = async (name) => {

        console.log(`****** validateName  name:  ${JSON.stringify(name)}`);

        const endpoint = host_backend + endpoint_validateName;

        const response = await axios.post(endpoint, {   data: {
                                                            groupId: name,
                                                        }
                                                     }, {
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        }
        }, {withCredentials: true})

        .catch(function(error){
        console.log(error);
        });

        console.log(`****** validateName  RESPONSE:  ${JSON.stringify(response)}`);

        return response;
    }



    const create = async (groupId, day, admin, inviteds) => {

        console.log(`****** create  admin:  ${ admin }`);

        const endpoint = host_backend + endpoint_create;

        const response = await axios.post(endpoint, {   data: {
                                                            groupId: groupId,
                                                            day: day,
                                                            admin: admin,
                                                            inviteds: inviteds
                                                        }
                                                     }, {
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        }
        }, {withCredentials: true})

        .catch(function(error){
            console.log(error);
        });

        console.log(`****** service create  RESPONSE:  ${JSON.stringify(response)}`);

        return response;
    }




    const currentGroup = async (groupId, email) => {

        console.log(`****** currentGroup  groupId:  ${ groupId }`);

        var group = {};

        const endpoint = host_backend + endpoint_currentGroup;

        const response = await axios.post(endpoint, {   data: {
                                                            groupId: groupId,
                                                            email: email,
                                                        }
                                                     }, {
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        }
        }, {withCredentials: true})

        .catch(function(error){
            console.log(error);
        });

        console.log(`****** service currentGroup  RESPONSE:  ${JSON.stringify(response)}`);

        if(response){

            group = response.data;
        }

        return group;
    }




const GroupService = {
    authorizedGroup,
    validateName,
    create,
    currentGroup,
};


export default GroupService;