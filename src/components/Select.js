import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const SelectField = ({ input, props, errorMessage }) => {
  const classes = useStyles();
  return (
    <div className='input-text'>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>
          Type of Flight
        </InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          {...input}
        >
          <MenuItem value={"cheap"}>Cheap</MenuItem>
          <MenuItem value={"business"}>Business</MenuItem>
        </Select>
      </FormControl>
      {errorMessage && <span className='errorMessage'>{errorMessage}</span>}
    </div>
  );
};

export default SelectField;
