import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Container, styled } from '@material-ui/core';
//import styled from 'styled-components';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },

  grid: {
    margin: "32px",
    border: "2px solid #dc3545",
    borderRadius: "15px",
    maxHeight: "210px",
    overflowY: "scroll",
    padding: "0px !important",
    display: "block"
  },

  gridCont: {
    padding: "16px",
  },

  item: {
      paddingBottom: "0px !important",
      paddingTop: "0px !important",
  }


}));


// const Container = styled.div`
//     margin: 8px;
//     border: 1px solid lightgrey;
//     border-radius: 2px;

// `;


export default function InteractiveList(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const { teamA, teamB, passTeamB, passTeamA, readOnly } = props;

  console.log(`****  LIST -->  readOnly:  ${ readOnly }`);


  function generateTeamA (element) {

    const { teamA } = props;
  
    return teamA.map((value) =>
      React.cloneElement(element, {
        key: value.nickname,
      }),
    );
  }


  return (
    <div className={classes.root}>

<Container >
{/* style={{padding: "5px !important"}} */}
<Grid container spacing={10} > 
            <Grid item xs={5} container className={classes.grid}>
    
      {/* <Grid item xs={12} md={6}> */}
          
          {/* <Typography variant="h6" className={classes.title}>
            Avatar with text and icon
          </Typography> */}

          {/* <div className={classes.demo}> */}
            <List dense={dense} >

              {/* {generateTeamA( */}
            
              {teamA.map( playerA => 
                <ListItem className={classes.item} key={playerA._id} > 
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={playerA.nickname}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={ () => passTeamB(playerA) } disabled={readOnly} >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,  
              )}
            </List>
            </Grid>
          {/* </div> */}



          <Grid item xs={5} container className={classes.grid}>
    
    {/* <Grid item xs={12} md={6}> */}
        
        {/* <Typography variant="h6" className={classes.title}>
          Avatar with text and icon
        </Typography> */}

        {/* <div className={classes.demo}> */}
          <List dense={dense}>
            {/* {generate2( */}
            {teamB.map( playerB => 
              <ListItem className={classes.item} key={playerB._id} >
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={playerB.nickname}
                  secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={ () => passTeamA(playerB) } disabled={readOnly} >
                    <ArrowBackIosIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>,
            )}
          </List>
          </Grid>



          </Grid>
          </Container>
        {/* </Grid> */}
    </div>
  );
}
