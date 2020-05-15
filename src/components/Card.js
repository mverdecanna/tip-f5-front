import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    minWidth: 150,
    opacity: 0.8,
    backgroundColor: "#9b9b9b",
    width: "45%",
    height: "138px"
},

play: {
  minWidth: 150,
  opacity: 0.8,
  backgroundColor: "#00c3f8",
  //padding: "16px",
  width: "45%",
  height: "138px"
},

play_user: {
  minWidth: 150,
  opacity: 0.8,
  backgroundColor: "#c2ff07d9", //"#D4AF37",
  //padding: "13px",
  width: "45%",
  height: "138px"
},

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }

});


export default function SimpleCard(props) {

  const classes = useStyles();

  const { player, confirmed, functionClick, logged, isAdmin} = props;

  console.log(`****  SimpleCard -->  confirmed:  ${ JSON.stringify(confirmed) }`);
  console.log(`****  SimpleCard -->  player.email:  ${ JSON.stringify(player.email) }`);

  const style = logged ? classes.play_user : ( confirmed ? classes.play : classes.root )

  //const style = confirmed ? classes.play : classes.root;

  const label = !confirmed ? "Me anoto!" : "Me bajo!";
  //console.log(`****  SimpleCard -->  label:  ${ JSON.stringify(label) }`);


  return (
    <Card className={style} >

      <CardContent>

        <Typography variant="h6" component="p">
            {player.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            '{player.nickname}'
        </Typography>

      </CardContent>

      <CardActions>
        <Button disabled={ ( !isAdmin && !logged ) } size="medium" color="secondary" onClick={ () => functionClick(player) }> {label} </Button>   
      </CardActions>

    </Card>
  );
}
