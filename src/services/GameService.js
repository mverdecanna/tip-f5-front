import axios from 'axios';


const { host_backend, 
        endpoint_getGame,
        endpoint_updateGamePlayers,
        endpoint_confirmGame,
        endpoint_suspendGame,
        endpoint_updateDataOfTheGame,
        tokenKey } = require("../config/keys");




    const getNextGame = async (group, date) => {

        //const date = getDateOfTheNextGame(dayOfWeek);

        const endpoint = host_backend + endpoint_getGame;
        console.log(`*-*-*-*-*-*  getNextGame   endpoint:  ${endpoint}`);
        console.log(`*-*-*-*-*-*  getNextGame   group:  ${group}`);
        console.log(`*-*-*-*-*-*  getNextGame   date:  ${date}`);

        const result = await axios.post(endpoint, {   data: {
                                                        group: group,
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




    const updateGamePlayers = async (group, date, players) => {
        
        const endpoint = host_backend + endpoint_updateGamePlayers;
        console.log(`*-*-*-*-*-*  updateGamePlayers   endpoint:  ${endpoint}`);

        const result = await axios.put(endpoint, {   data: {
                                                        group: group,
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
    
  
    
    const confirmGame = async (group, date) => {
        
        const endpoint = host_backend + endpoint_confirmGame;
        console.log(`*-*-*-*-*-*  confirmGame   endpoint:  ${endpoint}`);

        const result = await axios.put(endpoint, {   data: {
                                                        group: group,
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
    
    
    
    const suspendGame = async (group, date) => {
        
        const endpoint = host_backend + endpoint_suspendGame;
        console.log(`*-*-*-*-*-*  suspendGame   endpoint:  ${endpoint}`);

        const result = await axios.put(endpoint, {   data: {
                                                        group: group,
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



    const updateDataOfTheGame = async (group, date, teamA, teamB, result, text) => {
        
        const endpoint = host_backend + endpoint_updateDataOfTheGame;
        console.log(`*-*-*-*-*-*  updateDataOfTheGame   endpoint:  ${endpoint}`);

        const response = await axios.put(endpoint, {   data: {
                                                        group: group,
                                                        dayOfTheMatch: date,
                                                        teamA: teamA,
                                                        teamB: teamB,
                                                        result: result,
                                                        text: text,
                                                    }
                                                }, {
                                                    headers: {
                                                        'TOKEN': tokenKey,
                                                        'Content-Type': 'application/json'
                                                    }
        });
        console.log(`******  RESPONSE:  ${JSON.stringify(response)}`);
    }



    const GameService = {
        getNextGame,
        updateGamePlayers,
        confirmGame,
        suspendGame,
        updateDataOfTheGame
    };
    
    export default GameService;