import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import CustomSnackbar from './CustomSnackbar';

import MuiAlert from '@material-ui/lab/Alert';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

    const { validationButton, saveAndOpen, readOnly } = props;


    const handleClick = () => {

      

    }


  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        disabled={!validationButton || readOnly }  // validationButton && !readOnly   ......
        onClick={ () => saveAndOpen() }
      >
        Guardar
      </Button>

        {/* <CustomSnackbar typeMessageOK={typeMessageOK} /> */}

    </div>
  );


}
