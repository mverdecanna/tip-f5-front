
import moment from 'moment';



    const validLoginInputs = (username, password) => {

        return username.length && 
                username.length > 6 && 
                username.includes('@') &&
                username.includes('.com') &&
                password.length && 
                password.length > 6
    }



    const getDateOfTheNextGame = (dayOfWeek) => {

        const theDayInThisWeek = moment().day(dayOfWeek).startOf('day');
        const nextDate = moment().day(dayOfWeek + 7).startOf('day');
        const today = moment().startOf('day');
        
        const result = ( theDayInThisWeek.isSameOrAfter(today) ) ? theDayInThisWeek : nextDate;
        console.log(`*-*-*-*-*-*-*-*-*-*   getNextDayOfWeek  RESULT: ${JSON.stringify(result)}`);
        return result;
    }



    const playerIsIncludeInTheList = (player, confirmedPlayers) => {

        return confirmedPlayers.map(confirmed => getEmail(confirmed)).includes(player.email);
    }


    const getEmail = (player) => {
        console.log(`*-*-*-*-*-*-*-*-*-*   getEmail  player: ${JSON.stringify(player)}`);
        return player.email;
    }

    


    const Helper = {
        validLoginInputs,
        getDateOfTheNextGame,
        playerIsIncludeInTheList
    };
    
    export default Helper;
