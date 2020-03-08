import { addCheapFlight } from "./flightActions";
import { ADD_CHEAP_FLIGHTS } from "../actionTypes";

describe("ACTIONS", () => {
  it("should create an action with correct type", () => {
    const expectedAction = {
      type: ADD_CHEAP_FLIGHTS,
      payload: {
        route: "SriLanka to Singapore",
        departure: "2020-02-08T12:10",
        arrival: "2020-02-08T14:00"
      }
    };
    expect(
      addCheapFlight({
        route: "SriLanka to Singapore",
        departure: "2020-02-08T12:10",
        arrival: "2020-02-08T14:00"
      })
    ).toEqual(expectedAction);
  });
});
