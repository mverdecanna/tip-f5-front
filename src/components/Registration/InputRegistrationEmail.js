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

export default function ValidationTextFieldEmail(props) {
  const classes = useStyles();

  const { handlerRegistrationEmail, registrationEmail, invalidEmail } = props;


  const handleChange = (event) => {

    var value = event.target.value 
    console.log(`****  inputEmail  handleChange  value:  ${ value }`);

    handlerRegistrationEmail(value);
}


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error={invalidEmail && registrationEmail !== ""}
          id="outlined-error-helper-text"
          label="Email"
          //defaultValue=""
          helperText="Ingresa tu email"
          variant="outlined"
          value={registrationEmail}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
