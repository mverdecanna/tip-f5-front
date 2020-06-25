import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

export default function InputAdornments(props) {

  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });


  const { handlerRegistrationPassword, registrationPassword, invalidPassword } = props;


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });

    console.log(`****  inputPassword  handleChange  value:  ${ event.target.value }`);
    handlerRegistrationPassword(event.target.value);
  };


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className={classes.root}>
      <div>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Contraseña </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={79}
            error={invalidPassword && registrationPassword !== ""}
          />
          <FormHelperText id="standard-weight-helper-text">Mínimo 7 caracteres</FormHelperText>
        </FormControl>
        
      </div>
    </div>
  );
}
