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

export default function ValidationTextFieldSurname(props) {
  const classes = useStyles();

  const { handlerRegistrationSurname, registrationSurname } = props;


  const handleChange = (event) => {

    var value = event.target.value 
    console.log(`****  inputSurname  handleChange  value:  ${ value }`);

    handlerRegistrationSurname(value);
}


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          //error={invalidEmail && inputEmail !== ""}
          id="outlined-error-helper-surname"
          label="Apellido"
          //defaultValue=""
          helperText="Ingresa tu apellido"
          variant="outlined"
          value={registrationSurname}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
