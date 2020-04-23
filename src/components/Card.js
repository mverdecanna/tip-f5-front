import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { width } from '@material-ui/system';


const useStyles = makeStyles({
  root: {
    minWidth: 70,
    opacity: 0.8,
    backgroundColor: "#9b9b9b",
    width: "8%"
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
  },

  play: {
    minWidth: 150,
    opacity: 0.8,
    backgroundColor: "#00c3f8",
    padding: "13px"
  }

});

export default function SimpleCard(props) {

  const classes = useStyles();

  const { player, confirmed, functionClick } = props;

  const style = confirmed ? classes.play : classes.root;
  const label = !confirmed ? "Me anoto!" : "Me bajo!";
  

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
        <Button size="small" color="secondary" onClick={ () => functionClick(player) }> {label} </Button>   
      </CardActions>
      {/* onClick={} */}
    </Card>
  );
}
