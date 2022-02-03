import React, {useState, useContext } from 'react';
import './DepartureReturn.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { useFormContext } from 'react-hook-form';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { TimeContext } from '../BookingForm/BookingForm';

const DepartureReturn = (props) => {
  const [timedetails, setTimeDetails] = useContext(TimeContext)
  const { register } = useFormContext();
  const [selectedDate, setSelectedDate] = useState({
    departure: new Date(),
    return: new Date()
  });
  const handleDepartureDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.departure = date;
    setSelectedDate(newDates);
    setTimeDetails(newDates);
  };
  const handleReturnDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.return = date;
    setSelectedDate(newDates);
    setTimeDetails(newDates);
  };
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifycontent="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Departure"
            value={selectedDate.departure}
            onChange={handleDepartureDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          {
            props.oneWay ? <KeyboardDatePicker
            margin="normal"
            disabled
            id="date-picker-dialog"
            label="Return"
            format="dd/MM/yyyy"
            value={selectedDate.return}
            onChange={handleReturnDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          /> : <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Return"
          format="dd/MM/yyyy"
          value={selectedDate.return}
          onChange={handleReturnDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
          }
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DepartureReturn;