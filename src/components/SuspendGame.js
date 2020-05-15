import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green, yellow, red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import ReportIcon from '@material-ui/icons/Report';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  fabProgress: {
    color: red[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: red[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegration(props) {

  const { suspend, effect, statusSuspended } = props;

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);

      suspend();
      effect();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fab
          aria-label="save"
          color="primary"
          style={ ( success || statusSuspended ) ? { background: '#da2435', color: 'white' } : { background: '#c1c106', color: 'white' } }  // #980c19  #bb1020  #c1c106  #CCCC00
          className={buttonClassname}
          onClick={handleButtonClick}
        >
          { ( success || statusSuspended ) ? <ReportIcon /> : <ReportProblemIcon /> }
        </Fab>
        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
      </div>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          style={ ( success || statusSuspended ) ? { background: '#da2435', color: 'white' } : { background: '#c1c106', color: 'black' } }  // #980c19  #bb1020  #c1c106  #CCCC00
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          { ( success || statusSuspended ) ? "Partido Suspendido" : "Suspender Partido" }
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
}
