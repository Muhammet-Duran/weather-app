import { Fragment, useEffect, useState } from "react";

import styles from "./App.module.scss";
import CitySearch from "./components/CitySearch/CitySearch";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/ForecastWeather/ForecastWeather";
import Loading from "./assets/Loading.gif";
import { updateDailyWeather } from "./helpers/getUpdateDailyWeather";
import { getForeCastWeather } from "./api/getCityWetaher";

function App() {
  const [location, setLocation] = useState("Istanbul");
  const [filterForecast, setFilterForecast] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(filterForecast);

  const getWeatherApi = async () => {
    setIsLoading(true);
    try {
      const dataForecast = await getForeCastWeather(location);
      setFilterForecast(updateDailyWeather(dataForecast?.data));
      console.log(dataForecast);
    } catch (error) {
      setError(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const searchOnSubmit = (e) => {
    e.preventDefault();
    getWeatherApi();
  };

  useEffect(() => {
    getWeatherApi();
  }, []);

  //İnput Value
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className={styles.app}>
      <CitySearch onFormSubmit={searchOnSubmit} handleChange={handleChange} />
      {filterForecast ? (
        <div className={styles.app__weather_area}>
          {isLoading ? (
            <img width="60px" src={Loading} alt="Loadergif" />
          ) : (
            <Fragment>
              <CurrentWeather
                weatherData={filterForecast[0]}
                location={location}
              />
              <Forecast forecastWeather={filterForecast?.slice(1)} />
            </Fragment>
          )}
        </div>
      ) : (
        <h1 className={styles.app__undefined_title}>
          Let's find out how the weather is today... 🙂
        </h1>
      )}
    </div>
  );
}

export default App;
