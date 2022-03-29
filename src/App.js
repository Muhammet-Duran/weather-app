import React, { useState } from "react";
import styles from "./App.module.scss";
import CitySearch from "./components/CitySearch/CitySearch";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/ForecastWeather/ForecastWeather";

import { getCityWeather } from "./api/getCityWetaher";
import { getForeCastWeather} from "./api/getCityWetaher";


function App() {
  const [location, setLocation] =useState("Samsun")
  const [weatherData, setWeatherData] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  
 
  const searchOnSubmit =async(e)=>{
    e.preventDefault();
    // if(!location || location === '') return;
    const data = await getCityWeather(location);
    setWeatherData(data);
    console.log(weatherData);

    const dataForecast = await getForeCastWeather(location);
    setForecastWeather(dataForecast);
    console.log(dataForecast)

  }
  
  

  const handleChange =(e)=>{
    setLocation(e.target.value)
  }

  return (
    <div className={styles.app}>
      <CitySearch  onFormSubmit ={searchOnSubmit} handleChange={handleChange} />
      <div className={styles.app__weather_area}>
        <CurrentWeather weatherData={weatherData}/>
        <Forecast />
      </div>
    </div>
  );
}

export default App;
