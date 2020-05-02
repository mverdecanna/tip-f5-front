



    const validLoginInputs = (username, password) => {

        return username.length && 
                username.length > 6 && 
                username.includes('@') &&
                username.includes('.com') &&
                password.length && 
                password.length > 6
    }



    const Helper = {
        validLoginInputs
    };
    
    export default Helper;
