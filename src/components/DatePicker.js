import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Choose another date"
          format="yyyy-MM-dd"
          value={props.dateInfo}
          onChange={props.dateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
    </MuiPickersUtilsProvider>
  );
}
