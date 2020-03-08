import axios from "axios";

export const fetchCheapFlightData = async () => {
  try {
    const response = await axios.get(
      "https://tokigames-challenge.herokuapp.com/api/flights/cheap"
    );
    return response.data;
  } catch (e) {
    return e;
  }
};

export const fetchBusinessFlightData = async () => {
  try {
    const response = await axios.get(
      "https://tokigames-challenge.herokuapp.com/api/flights/business"
    );
    return response.data;
  } catch (e) {
    return e;
  }
};
