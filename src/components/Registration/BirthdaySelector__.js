import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  const { handlerRegistrationBirthday } = props;


  const handleDateChange = (value) => {

    console.log(`****  handleDateChange  value:  ${ JSON.stringify(value) }`);

    handlerRegistrationBirthday(value);
  };


  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={ <strong>{"Fecha de Nacimiento"}</strong> }
        type="date"
        defaultValue={new Date()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        //onChange={handleDateChange}
        onChange={(event, value) => handleDateChange(value)}

      />
    </form>
  );
}
