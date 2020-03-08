import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import flightsReducer from "../containers/Flight/reducers/flightReducer";

const rootReducer = combineReducers({
  flights: flightsReducer,
  form: formReducer
});

export default rootReducer;
