import axios from 'axios';


//export default class PlayerService {



    const getPlayers = async () => {
        const endpoint = "http://localhost:18080/api/getAllPlayers";
        //const endpoint = "http://068742ee.ngrok.io/api/getAllPlayers";

        const players = await axios.get(endpoint);

        console.log(`******  PLAYERS:  ${players}`);

        return players;
    }




    const PlayerService = {
        getPlayers
    };
    
    export default PlayerService;


