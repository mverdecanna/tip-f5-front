import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

    const { addEmail, invalidEmail } = props;

    const handleClick = () => {

      if(!invalidEmail){

        addEmail();
      }
    }


  return (
    <div style={{display: "inline-flex", alignItems: "center", height: "70px"}}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<PersonAddIcon />}
        //disabled={!validationButton || readOnly }
        onClick={ handleClick }
      >
        Agregar
      </Button>

        {/* <CustomSnackbar typeMessageOK={typeMessageOK} /> */}

    </div>
  );


}
