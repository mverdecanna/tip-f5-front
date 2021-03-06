import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "126px"
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [control, setControl] = React.useState(false);

    const { readyToRegistration, registrationOK, onClickRegistration, errorMessage } = props;



    const handleClick = () => {

      setControl(true);

      onClickRegistration();

      setTimeout(function() {
            
        setOpen(true);

      }, 2000);
      
      setControl(false);
    }


    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


  return (
    // <div style={{display: "inline-flex", alignItems: "center", height: "70px"}}>
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<CheckCircleIcon fontSize="large" />}
        disabled={ !readyToRegistration && !control }
        onClick={ handleClick }
      >
        Registrar
      </Button>


      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>

        {
          registrationOK ? 
                          <Alert onClose={handleClose} severity="success">
                              { errorMessage }
                          </Alert>
                        :
                          <Alert onClose={handleClose} severity="error">
                              { errorMessage }
                          </Alert>
        }

      </Snackbar>

    </div>
  );


}
