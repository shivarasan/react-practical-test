import {
  FETCH_CHEAP_FLIGHTS_REQUEST,
  FETCH_BUSINESS_FLIGHTS_REQUEST
} from "../actionTypes";

import { call, put, takeLatest } from "redux-saga/effects";

import {
  requestCheapFlightSuccess,
  requestBusinessFlightSuccess,
  requestCheapFlightFailed,
  requestBusinessFlightFailed
} from "../actions/flightActions";
import { fetchCheapFlightData, fetchBusinessFlightData } from "../../../api";

function* getCheapFlightData() {
  try {
    const data = yield call(fetchCheapFlightData);
    yield put(requestCheapFlightSuccess(data));
  } catch (e) {
    yield put(requestCheapFlightFailed(e));
  }
}
function* getBusinessFlightData() {
  try {
    const data = yield call(fetchBusinessFlightData);
    yield put(requestBusinessFlightSuccess(data));
  } catch (e) {
    yield put(requestBusinessFlightFailed(e));
  }
}

export default function* mySaga() {
  yield takeLatest(FETCH_CHEAP_FLIGHTS_REQUEST, getCheapFlightData);
  yield takeLatest(FETCH_BUSINESS_FLIGHTS_REQUEST, getBusinessFlightData);
}
