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

export default function ValidationTextFieldName(props) {
  const classes = useStyles();

  const { handlerRegistrationName, registrationName } = props;


  const handleChange = (event) => {

    var value = event.target.value 
    console.log(`****  inputName  handleChange  value:  ${ value }`);

    handlerRegistrationName(value);
}


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          //error={invalidEmail && inputEmail !== ""}
          id="outlined-error-helper-name"
          label="Nombre"
          //defaultValue=""
          helperText="Ingresa tu nombre"
          variant="outlined"
          value={registrationName}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
