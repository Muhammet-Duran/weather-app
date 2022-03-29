

import Axios from "axios";
const fetch = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    apikey: process.env.REACT_APP_WEATHER_API_KEY,
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default fetch;
