import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import ButtonWithIcon from './ButtonWithIcon';
import SaveIcon from '@material-ui/icons/Save';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const { typeMessageOK, validationButton, save, readOnly } = props;


  const handleClick = () => {
    save();
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>

      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        disabled={!validationButton || readOnly }  // validationButton && !readOnly   ......
        onClick={handleClick}
      >
        Guardar
      </Button>





      {/* <ButtonWithIcon validationButton={validationButton}  saveAndOpen={handleClick} readOnly={readOnly} /> */}

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>

        {
          typeMessageOK ? 
                          <Alert onClose={handleClose} severity="success">
                            Guardado exitoso!
                          </Alert>
                        :
                          <Alert onClose={handleClose} severity="error">
                            No se pudo guardar!
                          </Alert>
        }

        {/* <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert> */}
      </Snackbar>
      
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </div>
  );
}
