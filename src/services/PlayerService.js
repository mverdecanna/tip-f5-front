import axios from 'axios';

const { host_backend, 
        endpoint_getAllPlayers, 
        tokenKey } = require("../config/keys");




    const getPlayers = async (group) => {
        const endpoint = host_backend + endpoint_getAllPlayers;
        //const endpoint = "http://068742ee.ngrok.io/api/getAllPlayers";

        const players = await axios.get(endpoint, { 
                                                    //headers: { 'TOKEN': tokenKey },
                                                    params: {
                                                        group: group
                                                    } 
        }, {withCredentials: true});

        console.log(`******  PLAYERS:  ${players}`);

        return players;
    }




    const PlayerService = {
        getPlayers
    };
    
    export default PlayerService;


