import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.9),
    margin: 5,
  },
  chip: {
    margin: theme.spacing(0.9),
  },
}));


const lista = [];


export default function ChipsArray(props) {
  const classes = useStyles();

  const { emailList, handlerRemoveEmail } = props;

  const handleDelete = (email) => () => {
    handlerRemoveEmail(email);
  };
  
  console.log(`****  PAPER  emailList:  ${ emailList }`);
  return (


    <Paper component="ul" className={classes.root}  style={{overflowY: "scroll", maxHeight: "82px", paddingTop: "3px", minWidth: "100%", minHeight: "47px"}} >
      {/* {chipData.map((data) => { */}

{ emailList.length === 0 ? <h1></h1> :

emailList.map(email => {


        return (
          <li key={email.key}>
            {/* <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            /> */}
            <Chip 
              size="small" 
              label={email}
              onDelete={handleDelete(email)} 
              color="primary" 
            />

          </li>
        );
      })}


    </Paper>
  );
}
