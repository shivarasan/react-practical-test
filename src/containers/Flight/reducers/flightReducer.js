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

const initialState = {
  cheapFlightData: [],
  businessFlightData: [],
  cheapFlightError: null,
  businessflightError: null
};

export default function flightReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BUSINESS_FLIGHTS:
      return {
        ...state,
        businessFlightData: [...state.businessFlightData, action.payload]
      };
    case ADD_CHEAP_FLIGHTS:
      return {
        ...state,
        cheapFlightData: [...state.cheapFlightData, action.payload]
      };
    case FETCH_CHEAP_FLIGHTS_REQUEST:
      return {
        ...state,
        cheapFlightData: [],
        businessFlightData: [],
        cheapFlightError: null,
        businessflightError: null
      };
    case FETCH_CHEAP_FLIGHTS_SUCCESS:
      return {
        ...state,
        cheapFlightData: action.payload && action.payload.data
      };
    case FETCH_CHEAP_FLIGHTS_FAIL:
      return { ...state, cheapFlightError: action.payload };
    case FETCH_BUSINESS_FLIGHTS_REQUEST:
      return {
        ...state,
        cheapFlightData: [],
        businessFlightData: [],
        cheapFlightError: null,
        businessflightError: null
      };
    case FETCH_BUSINESS_FLIGHTS_SUCCESS:
      return {
        ...state,
        businessFlightData: action.payload && action.payload.data
      };
    case FETCH_BUSINESS_FLIGHTS_FAIL:
      return { ...state, businessflightError: action.payload };

    default:
      return state;
  }
}
