import React from "react";
import DailyForecast from "./DailyForecast/DailyForecast";
import styles from "./ForecastWeather.module.scss";

const ForecastWeather = ({ forecastWeather }) => {
  return (
    <div className={styles.forecast_area}>
      <ul className={styles.forecast_area__days_list}>
        {forecastWeather ? (
          forecastWeather.map((days, index) => {
            return <DailyForecast daysWeather={days} key={index} />;
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default ForecastWeather;
