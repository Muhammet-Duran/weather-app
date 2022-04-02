export const convertKelvinToCelsius = (kelvinTemp) => {
  let celsius = kelvinTemp - 273.15;
  celsius = Number.parseFloat(celsius).toFixed(0);
  return celsius;
};
