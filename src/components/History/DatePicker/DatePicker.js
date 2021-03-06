import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import moment from 'moment';
import helper from '../../../util/Helper';
import EventIcon from '@material-ui/icons/Event';



export default function MaterialUIPickers(props) {
  // The first commit of Material-UI

  const { setDate, older, dayWeek } = props;

  console.log(`**** datePicker older:  ${ JSON.stringify(older) }`);
  console.log(`**** datePicker dayWeek:  ${ JSON.stringify(dayWeek) }`);

  const datePreviousGame = helper.getDateOfThePreviousGame(dayWeek);

  const [selectedDate, setSelectedDate] = React.useState(datePreviousGame);

  const handleDateChange = date => {
    setSelectedDate(date);
    setDate(date);
  };

  function disableDays(date) {
    return date.getDay() !== dayWeek;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker

          //disabled={ true}//older > helper.getDateOfThePreviousGame(dayWeek) }
          keyboardIcon={<EventIcon style={{fontSize: "xx-large", color: "black"}}/>}
          shouldDisableDate={disableDays}
          //disableToolbar={true}
          //defaultValue={null}  //{moment().subtract(1, "days")}
          maxDate={moment().subtract(1, "days")}
          minDate={older}
          variant="inline"
          format="dd/MM/yyyy"
          inputProps={{fontWeight: "900 !important"}}
          margin="dense"
          id="date-picker-inline"
          label={<strong>Seleccionar fecha</strong>}
          //style={{fontWeight: "bold !important",}}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
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
