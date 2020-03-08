import reducer from "./flightReducer";
import * as actions from "../actions/flightActions";
import { FETCH_CHEAP_FLIGHTS_REQUEST } from "../actionTypes";
// import getPostMock from "../mocks/getPostMock";

describe("post reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchObject({
      cheapFlightData: [],
      businessFlightData: [],
      cheapFlightError: null,
      businessflightError: null
    });
  });

  it("should handle GET_POST_START", () => {
    const startAction = {
      type: FETCH_CHEAP_FLIGHTS_REQUEST
    };
    expect(reducer({}, startAction)).toMatchObject({
      cheapFlightData: [],
      businessFlightData: [],
      cheapFlightError: null,
      businessflightError: null
    });
  });

  //   it("should handle GET_POST_SUCCESS", () => {
  //     const successAction = {
  //       type: actions.GET_POST_SUCCESS,
  //       post: getPostMock.data // important to pass correct payload, that's what the tests are for ;)
  //     };
  //     expect(reducer({}, successAction)).toEqual(getPostMock.data);
  //   });

  //   it("should handle UPDATE_POST_SUCCESS", () => {
  //     const updateAction = {
  //       type: UPDATE_POST_SUCCESS,
  //       post: getPostMock.data
  //     };
  //     expect(reducer({}, updateAction)).toEqual(getPostMock.data);
  //   });

  //   it("should handle GET_POST_FAIL", () => {
  //     const failAction = {
  //       type: actions.GET_POST_FAIL,
  //       error: { success: false }
  //     };
  //     expect(reducer({}, failAction)).toEqual({ error: { success: false } });
  //   });
});
