import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { reduxForm, Field } from "redux-form";
import { required } from "redux-form-validators";

import InputField from "../../components/Input";
import SelectField from "../../components/Select";
import { addCheapFlight, addBusinessFlight } from "./actions/flightActions";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    },
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "Column",
    marginLeft: "2em"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  margin: {
    margin: "8px",
    padding: "14px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const renderInput = props => (
  <InputField
    {...props.input}
    {...props}
    errorMessage={props.meta.touched && props.meta.error}
  />
);
const renderSelect = props => (
  <SelectField
    input={props.input}
    props={props}
    classes={props.classes}
    errorMessage={props.meta.touched && props.meta.error}
  />
);

let FlightCreate = ({ valid }) => {
  const dispatch = useDispatch();
  const formsValue = useSelector(
    state =>
      state.form &&
      state.form &&
      state.form.flightCreationForm &&
      state.form.flightCreationForm.values
  );
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <Field
        name='typeOfFlight'
        id='typeOfFlight'
        label='type of flight'
        component={renderSelect}
        validate={[required({ message: "This field is required" })]}
        classes={classes}
      />
      {formsValue &&
        formsValue.typeOfFlight &&
        formsValue.typeOfFlight === "cheap" && (
          <Field
            name='route'
            id='outlined-basic'
            label='route'
            variant='outlined'
            type='text'
            component={renderInput}
            validate={[required({ message: "This field is required" })]}
          />
        )}
      {formsValue &&
        formsValue.typeOfFlight &&
        formsValue.typeOfFlight !== "cheap" && (
          <>
            <Field
              name='departure'
              id='outlined-basic'
              label='departure'
              variant='outlined'
              type='text'
              component={renderInput}
              validate={[required({ message: "This field is required" })]}
            />
            <Field
              name='arrival'
              id='outlined-basic'
              label='arrival'
              variant='outlined'
              type='text'
              component={renderInput}
              validate={[required({ message: "This field is required" })]}
            />{" "}
          </>
        )}
      <Field
        name='departureTime'
        id='time'
        label='departure time'
        type='time'
        defaultValue='07:30'
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 300
        }}
        variant='outlined'
        style={{ margin: 0 }}
        component={renderInput}
        validate={[required({ message: "This field is required" })]}
      />
      <Field
        name='arrivalTime'
        label='arrival time'
        type='time'
        defaultValue='07:30'
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 300 // 5 min
        }}
        variant='outlined'
        style={{ margin: 0 }}
        component={renderInput}
        validate={[required({ message: "This field is required" })]}
      />
      <Button
        disabled={!valid}
        variant='outlined'
        size='large'
        color='primary'
        className={classes.margin}
        onClick={() => {
          if (formsValue.typeOfFlight === "cheap") {
            dispatch(
              addCheapFlight({
                route: formsValue.route,
                departure: new Date(
                  moment().format("YYYY-MM-DD") + "T" + formsValue.departureTime
                ),
                arrival: new Date(
                  moment().format("YYYY-MM-DD") + "T" + formsValue.arrivalTime
                )
              })
            );
          } else {
            dispatch(
              addBusinessFlight({
                departure: formsValue.departure,
                arrival: formsValue.arrival,
                arrivalTime: new Date(
                  moment().format("YYYY-MM-DD") + "T" + formsValue.arrivalTime
                ),
                departureTime: new Date(
                  moment().format("YYYY-MM-DD") + "T" + formsValue.departureTime
                )
              })
            );
          }
        }}
      >
        Submit
      </Button>
    </form>
  );
};

FlightCreate = reduxForm({
  form: "flightCreationForm"
})(FlightCreate);

export default FlightCreate;
