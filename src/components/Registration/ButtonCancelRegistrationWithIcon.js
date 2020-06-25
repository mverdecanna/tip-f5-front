import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "125px"
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

    const { handlerCancel } = props;

    const handleClick = () => {
      handlerCancel();
    }


  return (
    // <div style={{display: "inline-flex", alignItems: "center", height: "70px"}}>
    <div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<CancelIcon />}
        //disabled={!validationButton || readOnly }
        onClick={ handleClick }
      >
        Cancelar
      </Button>

        {/* <CustomSnackbar typeMessageOK={typeMessageOK} /> */}

    </div>
  );


}
