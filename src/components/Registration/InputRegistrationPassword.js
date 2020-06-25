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

export default function ValidationTextFieldPassword(props) {
  const classes = useStyles();

  //const { handlerRegistrationName, registrationName } = props;


  const handleChange = (event) => {

    var value = event.target.value 
    console.log(`****  inputPassword  handleChange  value:  ${ value }`);

    //handlerRegistrationName(value);
}


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          //error={invalidEmail && inputEmail !== ""}
          id="outlined-error-helper-text"
          label="Contraseña"
          //defaultValue=""
          helperText="Ingresar contraseña"
          variant="outlined"
          type="password"
          //value={registrationName}
          //onChange={handleChange}
        />
      </div>
    </form>
  );
}
