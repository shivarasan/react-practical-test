import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import _ from "lodash";
import MaterialTable from "material-table";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import {
  requestCheapFlights,
  requestBusinessFlights
} from "./actions/flightActions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function FlightSearch() {
  const [state, setState] = useState({
    columns: [
      {
        title: "Route",
        field: "route"
      },
      { title: "Departure", field: "departure" },
      { title: "Arraival", field: "arrival" },
      {
        title: "Departure Time",
        field: "departureTime",
        type: "date"
      },
      {
        title: "Arrival Time",
        field: "arrivalTime",
        type: "date"
      }
    ],
    data: []
  });
  const dispatch = useDispatch();

  const cheapFlightData = useSelector(
    state => state.flights && state.flights.cheapFlightData
  );
  const businessFlightData = useSelector(
    state => state.flights && state.flights.businessFlightData
  );
  const classes = useStyles();

  useEffect(() => {
    if (!cheapFlightData.length || !businessFlightData.length) {
      dispatch(requestCheapFlights());
      dispatch(requestBusinessFlights());
    }
  }, []);

  useEffect(() => {
    const tempState = _.clone(state);
    if (
      cheapFlightData &&
      cheapFlightData.length &&
      businessFlightData &&
      businessFlightData.length
    ) {
      cheapFlightData.map(flight => {
        tempState.data.push({
          route: flight.route,
          departure: "N/A",
          arrival: "NA",
          departureTime: moment(flight.departure).format("h:mm:ss a"),
          arrivalTime: moment(flight.arrival).format("h:mm:ss a")
        });
      });
      businessFlightData.map(flight => {
        tempState.data.push({
          route: "NA",
          departure: flight.departure,
          arrival: flight.arrival,
          departureTime: moment(flight.departureTime).format("h:mm:ss a"),
          arrivalTime: moment(flight.arrivalTime).format("h:mm:ss a")
        });
      });
      setState(tempState);
    }
  }, [cheapFlightData, businessFlightData]);

  return state.data && state.data.length ? (
    <MaterialTable title='Flight' columns={state.columns} data={state.data} />
  ) : (
    <div className={classes.root}>
      <LinearProgress color='secondary' />
    </div>
  );
}
