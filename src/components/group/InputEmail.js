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

  const { handlerInputEmail, inputEmail, invalidEmail } = props;


  const handleChange = (event) => {

    var value = event.target.value 
    console.log(`****  inputEmail  handleChange  value:  ${ value }`);

    handlerInputEmail(value);
}


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error={invalidEmail && inputEmail !== ""}
          id="outlined-error-helper-text"
          label="Email"
          //defaultValue=""
          helperText="Invita a tus amigos"
          variant="outlined"
          value={inputEmail}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
