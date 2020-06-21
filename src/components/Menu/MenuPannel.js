import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router';
import './pannelStyles.css';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}


<div className="nav-side-menu">


  <div className="navbar-box">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

          <li className="nav-item active" >
            <Link activeClassName="activeLink" to="/" className="nav-link">
                <i className="fas fa-chart-line"></i>Principal
            </Link>
          </li>

          <li className="nav-item" >
            <Link activeClassName="activeLink" to="/history" className="nav-link">
                <i className="fas fa-comments"></i>Historial
            </Link>
          </li>

          {/* <li className="nav-item" >
            <Link activeClassName="activeLink" to="/" className="nav-link">
                <i className="fas fa-comments"></i>Mis Partidos
            </Link>
          </li> */}
          
      </ul>
  </div>   
</div>




    </div>
  );

  return (

        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
                <MenuIcon  onClick={toggleDrawer(anchor, true)}/>
              {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>

  );
}