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



export default function MaterialUIPickers(props) {
  // The first commit of Material-UI

  const { setDate } = props;

  const datePreviousGame = helper.getDateOfThePreviousGame(2);

  const [selectedDate, setSelectedDate] = React.useState(datePreviousGame);

  const handleDateChange = date => {
    setSelectedDate(date);
    setDate(date);
  };

  function disableDays(date) {
    return date.getDay() !== 2;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          shouldDisableDate={disableDays}
          //disableToolbar
          //defaultValue={null}  //{moment().subtract(1, "days")}
          maxDate={moment().subtract(1, "days")}
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Seleccionar fecha"
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
