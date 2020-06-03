import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



export default function CheckboxLabels(props) {

    const { setResult, result, setHasResult, readOnly } = props;
    console.log(`****  CheckboxLabels  result:  ${ result }`);
    console.log(`****  CheckboxLabels  result:  ${ result === "Empate" }`);
    
    const initialState = {
        checkedWinA: false, //result !== "Gano A",
        checkedDraw: false, //result !== "Empate",
        checkedWinB: false, //result !== "Gano B",        
    };


  const [state, setState] = React.useState(initialState);


//   const { firstCheck } = state;
//   if(firstCheck && result !== ""){
//     console.log(`****  CheckboxLabels  IF  result:  ${ result }`);
//     setState({
//         ...state,
//         checkedWinA: result == "Gano A",
//         checkedDraw: result === "Empate",
//         checkedWinB: result === "Gano B",
//         firstCheck: false
//     });
//   }


  useEffect( () => {
      
    if(result !== ""){
        setState({
            ...state,
            //firstCheck: true,
            checkedWinA: result === "Gano A",
            checkedDraw: result === "Empate",
            checkedWinB: result === "Gano B",
        });
    }else{
        cleanData();
    }
  }, [result])



  const cleanData = () => {

        setState({
            initialState
            // ...state,
            // firstCheck: true,
            // checkedWinA: false, //result !== "Gano A",
            // checkedDraw: false, //result !== "Empate",
            // checkedWinB: false, //result !== "Gano B",
        });
  };



  const handleChange = (event) => {

    console.log(`****  CheckboxLabels  handleChange  event:  ${ event.target.checked }`);
    
    var check;
    //const { setResult, result, setHasResult } = props;

    if( event.target.checked ){

        check = true;

        setState({
            ...state,
            checkedWinA: event.target.name === "checkedWinA" ? true : false,
            checkedDraw: event.target.name === "checkedDraw" ? true : false,
            checkedWinB: event.target.name === "checkedWinB" ? true : false,
            //hasResult: result
        });

        setResult(event.target.name);
        
    }else{

        check = false;

        setState({ ...state, [event.target.name]: event.target.checked, });
            //hasResult: result});
    }
    setHasResult(check);
  };


  return (
      

    <FormGroup row style={{justifyContent: "space-between", width: "95%", paddingLeft: "37px"}}>
       <FormControlLabel
        control={<GreenCheckbox checked={state.checkedWinA} onChange={handleChange} name="checkedWinA" />}
        label="Gano A "
        style={{fontFamily: "fantasy", fontSize: "larger"}}
        disabled={readOnly}
      />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedDraw} onChange={handleChange} name="checkedDraw" />}
        label="Empataron "
        style={{fontFamily: "fantasy", fontSize: "larger"}}
        disabled={readOnly}
      />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedWinB} onChange={handleChange} name="checkedWinB" />}
        label="Gano B "
        style={{fontFamily: "fantasy", fontSize: "larger"}}
        disabled={readOnly}
      />
    </FormGroup>
  );
}
