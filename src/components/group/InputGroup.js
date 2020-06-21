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

export default function ValidationTextFieldGroup(props) {
  const classes = useStyles();

    const { handlerEvalName, invalidName, text, handlerChangeText } = props;

    console.log(`****  inputGroup   text:  ${ text }`);


    const handleChange = (event) => {

      var value = event.target.value 
      console.log(`****  inputGroup  handleChange  value:  ${ value }`);

      handlerChangeText(value);
  }


  const handleOnBlur = () => {

    handlerEvalName(text);
  }


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error={invalidName && text !== ""}
          id="outlined-error-helper-text"
          label="Identificador"
          //defaultValue=""
          placeholder="algo"
          value={text}
          helperText={ (invalidName && text !== "") ? "No podes usar ese nombre!" : ""}
          variant="outlined"
          onBlur={ handleOnBlur }
          onChange={ handleChange }
        />
      </div>
    </form>
  );
}
