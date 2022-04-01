import React, { Fragment, useState } from "react";
import styles from "./App.module.scss";
import CitySearch from "./components/CitySearch/CitySearch";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/ForecastWeather/ForecastWeather";
import Loading from "./assets/Loading.gif";

// import { getCityWeather } from "./api/getCityWetaher";
import { getForeCastWeather } from "./api/getCityWetaher";

function App() {
  const [location, setLocation] = useState("Samsun");
  const [weatherData, setWeatherData] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [filterForecast, setFilterForecast] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const searchOnSubmit = async (e) => {
    e.preventDefault();
    // if(!location || location === '') return;
    // const data = await getCityWeather(location);
    // setWeatherData(data);
    console.log("loading");
    setIsLoading(true);
    const dataForecast = await getForeCastWeather(location);
    setForecastWeather(dataForecast);
    setFilterForecast(
      forecastWeather && updateDailyWeather(forecastWeather?.data)
    );
    setWeatherData(
      forecastWeather && updateDailyWeather(forecastWeather?.data)
    );
    console.log("loading bitti");
    setIsLoading(false);
  };
  // console.log(forecastWeather);

  //2------>daily weather update
  let updateDailyWeather = (data) => {
    const days = [];
    const dayIndex = getDayIndex(data);

    for (let i = 0; i < 5; i++) {
      days.push({
        date: data.list[dayIndex[i]].dt_txt,
        weather_desc: data.list[dayIndex[i]].weather[0].description,
        icon: data.list[dayIndex[i]].weather[0].icon,
        temp: data.list[dayIndex[i]].main.temp,
        city: data.city.name,
      });
    }
    return days;
  };

  //1-------->the next five days in the list
  const getDayIndex = (data) => {
    let dayIndex = [];
    dayIndex.push(0);
    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);
    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== "12"
      ) {
        index++;
      }
      dayIndex.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndex;
  };

  //İnput Value
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className={styles.app}>
      <CitySearch onFormSubmit={searchOnSubmit} handleChange={handleChange} />
      {forecastWeather ? (
        <div className={styles.app__weather_area}>
          {isLoading ? (
            <img width="60px" src={Loading} alt="Loadergif" />
          ) : (
            <Fragment>
              <CurrentWeather
                weatherData={weatherData && weatherData[0]}
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
