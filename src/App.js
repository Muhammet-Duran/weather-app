import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    setError(null);

    try {
      const dataForecast = await getForeCastWeather(location);
      setFilterForecast(updateDailyWeather(dataForecast?.data));
      console.log(dataForecast);
      setError(null);
    } catch (error) {
      setError("🤔 Oops! Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const searchOnSubmit = (e) => {
    e.preventDefault();
    getWeatherApi();
    console.log(location);
  };

  useEffect(() => {
    getWeatherApi();
  }, []);

  //İnput Value
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const variants = {
    hidden: { opacity: 0, y: "100vh" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div className={styles.app}>
      <CitySearch onFormSubmit={searchOnSubmit} handleChange={handleChange} />

      {error ? (
        <h1 className={styles.app__undefined_title}>{error}</h1>
      ) : (
        <motion.div
          className={styles.app__weather_area}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
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
        </motion.div>
      )}
    </div>
  );
}

export default App;
