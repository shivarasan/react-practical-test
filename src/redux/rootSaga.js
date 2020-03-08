import { fork, all } from "redux-saga/effects";
import FlightSagas from "../containers/Flight/sagas/flightSagas";

export default function* rootSaga() {
  return yield all([fork(FlightSagas)]);
}
