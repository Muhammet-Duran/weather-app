import fetch from "./fetch.js";

export const getForeCastWeather = async (city = "Samsun") => {
  const data = await fetch(`forecast?q=${city}`);
  return data;
};
