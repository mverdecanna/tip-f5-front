import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';


export default function AlertDialog(props) {

  const { jump, onClose, renderButton } = props;
  
//  const [open, setOpen] = React.useState(jump);

  console.log(`**** JUMP: ${jump}`);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    onClose();
    renderButton();
  };


  return (

      <div>

      <Dialog
        open={jump}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Ya estamos para jugar!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Podemos cerrar la lista...
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button onClick={handleClose} color="primary" autoFocus>
            Vamoooo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
