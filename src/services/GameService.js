import axios from 'axios';


const { host_backend, 
        endpoint_getGame,
        endpoint_updateGamePlayers,
        endpoint_confirmGame,
        endpoint_suspendGame,
        tokenKey } = require("../config/keys");




    const getNextGame = async (date) => {

        //const date = getDateOfTheNextGame(dayOfWeek);

        const endpoint = host_backend + endpoint_getGame;
        console.log(`*-*-*-*-*-*  getNextGame   endpoint:  ${endpoint}`);

        const result = await axios.post(endpoint, {   data: {
                                                        date: date
                                                    }
                                                }, {
                                                    headers: {
                                                        'TOKEN': tokenKey,
                                                        'Content-Type': 'application/json'
                                                    }
        });
        console.log(`******  RESULT:  ${JSON.stringify(result)}`);
        return result.data;
    }




    const updateGamePlayers = async (date, players) => {
        
        const endpoint = host_backend + endpoint_updateGamePlayers;
        console.log(`*-*-*-*-*-*  getNextGame   endpoint:  ${endpoint}`);

        const result = await axios.put(endpoint, {   data: {
                                                        dayOfTheMatch: date,
                                                        confirmedPlayers: players
                                                    }
                                                }, {
                                                    headers: {
                                                        'TOKEN': tokenKey,
                                                        'Content-Type': 'application/json'
                                                    }
        });
        console.log(`******  RESULT:  ${JSON.stringify(result)}`);
    }
    
  
    
    const confirmGame = async (date) => {
        
        const endpoint = host_backend + endpoint_confirmGame;
        console.log(`*-*-*-*-*-*  confirmGame   endpoint:  ${endpoint}`);

        const result = await axios.put(endpoint, {   data: {
                                                        dayOfTheMatch: date
                                                    }
                                                }, {
                                                    headers: {
                                                        'TOKEN': tokenKey,
                                                        'Content-Type': 'application/json'
                                                    }
        });
        console.log(`******  RESULT:  ${JSON.stringify(result)}`);
    }
    
    
    
    const suspendGame = async (date) => {
        
        const endpoint = host_backend + endpoint_suspendGame;
        console.log(`*-*-*-*-*-*  suspendGame   endpoint:  ${endpoint}`);

        const result = await axios.put(endpoint, {   data: {
                                                        dayOfTheMatch: date
                                                    }
                                                }, {
                                                    headers: {
                                                        'TOKEN': tokenKey,
                                                        'Content-Type': 'application/json'
                                                    }
        });
        console.log(`******  RESULT:  ${JSON.stringify(result)}`);
    }




    const GameService = {
        getNextGame,
        updateGamePlayers,
        confirmGame,
        suspendGame
    };
    
    export default GameService;