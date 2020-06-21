import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {

  const { handlerSelectDay } = props;

  const classes = useStyles();
  const [state, setState] = React.useState({
    day: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });

    handlerSelectDay(event.target.value);
  };

  return (
    <div>
     <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-day-native-simple" >Día</InputLabel>
        <Select
          native
          value={state.day}
          onChange={handleChange}
          label="Día"
          inputProps={{
            name: 'day',
            id: 'outlined-day-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={0}>Domingo</option>
          <option value={1}>Lunes</option>
          <option value={2}>Martes</option>
          <option value={3}>Miércoles</option>
          <option value={4}>Jueves</option>
          <option value={5}>Viernes</option>
          <option value={6}>Sábado</option>
        </Select>
        <FormHelperText>Elegí que día van a jugar</FormHelperText>
      </FormControl>
    </div>
  );
}
