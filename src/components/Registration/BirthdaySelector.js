import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import moment from 'moment';
import EventIcon from '@material-ui/icons/Event';



export default function MaterialUIPickers(props) {
  // The first commit of Material-UI

  const { handlerRegistrationBirthday } = props;

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = date => {

    const formatDate = new Date(date);
    formatDate.setHours(0,0,0,0)
    
    console.log(`**** handleDateChange  formatDate :  ${ formatDate }`);

    setSelectedDate(date);
    handlerRegistrationBirthday(formatDate);
  };

 

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          keyboardIcon={<EventIcon style={{fontSize: "xx-large", color: "black"}}/>}
          //keyboardIcon={<EventIcon style={{fontSize: "xx-large", color: "black", width: "fit-content"}}/>}
          maxDate={moment().subtract(1, "days")}
          variant="inline"
          format="dd/MM/yyyy"
          //inputProps={{fontWeight: "700 !important"}}
          //margin="dense"
          id="date-picker-inline"
          //label={ <strong>{"Fecha de Nacimiento"}</strong> }
          label={ "Fecha de Nacimiento" }
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
          //style={{width: "186px"}}
        />
        {/* <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        /> */}
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
