
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

        const dayInt = parseInt(dayOfWeek);

        const theDayInThisWeek = moment().day(dayInt).startOf('day');
        const nextDate = moment().day(dayInt + 7).startOf('day');
        const today = moment().startOf('day');
        
        const result = ( theDayInThisWeek.isSameOrAfter(today) ) ? theDayInThisWeek : nextDate;
        console.log(`*-*-*-*-*-*-*-*-*-*   getNextDayOfWeek  RESULT: ${JSON.stringify(result)}`);
        return result;
    }


    const getDateOfThePreviousGame = (dayOfWeek) => {

        const theDayInThisWeek = moment().day(dayOfWeek).startOf('day');
        const previousDate = moment().day(dayOfWeek - 7).startOf('day');
        const today = moment().startOf('day');
        
        const result = ( theDayInThisWeek.isBefore(today) ) ? theDayInThisWeek : previousDate;
        console.log(`*-*-*-*-*-*-*-*-*-*   getDateOfThePreviousGame  RESULT: ${JSON.stringify(result)}`);
        return result;
    }



    const playerIsIncludeInTheList = (player, confirmedPlayers) => {

        return confirmedPlayers.map(confirmed => getEmail(confirmed)).includes(player.email);
    }



    const getEmail = (player) => {
        console.log(`*-*-*-*-*-*-*-*-*-*   getEmail  player: ${JSON.stringify(player)}`);
        return player.email;
    }



    const formatResult = (result) => {

        var description = "";

        if(result){

            if(result === "checkedWinA"){

                description = "Gano A";

            }else if(result === "checkedWinB"){

                description = "Gano B";

            }else{

                description = "Empate";
            }
        }
        return description;
    }
    


    const Helper = {
        validLoginInputs,
        getDateOfTheNextGame,
        playerIsIncludeInTheList,
        getDateOfThePreviousGame,
        formatResult,
    };
    
    export default Helper;
