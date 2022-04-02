import { Fragment, useEffect, useState } from "react";

import styles from "./App.module.scss";
import {
  ForecastWeather,
  CurrentWeather,
  CitySearch,
} from "./components/index";
import Loading from "./assets/Loading.gif";
import { updateDailyWeather } from "./helpers/getUpdateDailyWeather";
import { getForeCastWeather } from "./api/getCityWetaher";

function App() {
  const [location, setLocation] = useState("Istanbul");
  const [filterForecast, setFilterForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherApi = async () => {
    setIsLoading(true);
    try {
      const dataForecast = await getForeCastWeather(location);
      setFilterForecast(updateDailyWeather(dataForecast?.data));
      console.log(dataForecast);
    } catch (error) {
      setError("🤔 Oops! Something went wrong");
      console.log("hata");
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

      {error ? (
        <h1 className={styles.app__undefined_title}>{error}</h1>
      ) : (
        <div className={styles.app__weather_area}>
          {isLoading ? (
            <div className={styles.app__weather_area__gif_area}>
              <img width="60px" src={Loading} alt="Loadergif" />
            </div>
          ) : (
            <Fragment>
              <CurrentWeather
                weatherData={filterForecast[0]}
                location={location}
              />
              <ForecastWeather forecastWeather={filterForecast?.slice(1)} />
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
