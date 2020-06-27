import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function ValidationTextFieldNickname(props) {
  const classes = useStyles();

  const { handlerRegistrationNickname, registrationNickname } = props;


  const handleChange = (event) => {

    var value = event.target.value 
    console.log(`****  inputNickname  handleChange  value:  ${ value }`);

    handlerRegistrationNickname(value);
}


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          //error={invalidEmail && inputEmail !== ""}
          id="outlined-error-helper-nickname"
          label="Nickname"
          //defaultValue=""
          helperText="Ingresa tu apodo"
          variant="outlined"
          value={registrationNickname}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
