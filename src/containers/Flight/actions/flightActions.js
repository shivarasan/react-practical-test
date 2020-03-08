import {
  FETCH_CHEAP_FLIGHTS_REQUEST,
  FETCH_CHEAP_FLIGHTS_SUCCESS,
  FETCH_CHEAP_FLIGHTS_FAIL,
  FETCH_BUSINESS_FLIGHTS_REQUEST,
  FETCH_BUSINESS_FLIGHTS_SUCCESS,
  FETCH_BUSINESS_FLIGHTS_FAIL,
  ADD_BUSINESS_FLIGHTS,
  ADD_CHEAP_FLIGHTS
} from "../actionTypes";

const addCheapFlight = data => ({
  type: ADD_CHEAP_FLIGHTS,
  payload: data
});
const addBusinessFlight = data => ({
  type: ADD_BUSINESS_FLIGHTS,
  payload: data
});

const requestCheapFlights = () => ({
  type: FETCH_CHEAP_FLIGHTS_REQUEST
});

const requestBusinessFlights = () => ({
  type: FETCH_BUSINESS_FLIGHTS_REQUEST
});

const requestCheapFlightSuccess = data => ({
  type: FETCH_CHEAP_FLIGHTS_SUCCESS,
  payload: data
});

const requestBusinessFlightSuccess = data => ({
  type: FETCH_BUSINESS_FLIGHTS_SUCCESS,
  payload: data
});

const requestCheapFlightFailed = error => ({
  type: FETCH_CHEAP_FLIGHTS_FAIL,
  payload: error
});

const requestBusinessFlightFailed = error => ({
  type: FETCH_BUSINESS_FLIGHTS_FAIL,
  payload: error
});

export {
  requestCheapFlights,
  requestBusinessFlights,
  requestCheapFlightSuccess,
  requestBusinessFlightSuccess,
  requestCheapFlightFailed,
  requestBusinessFlightFailed,
  addCheapFlight,
  addBusinessFlight
};
