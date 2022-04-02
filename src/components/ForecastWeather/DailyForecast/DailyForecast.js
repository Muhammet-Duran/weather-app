import React from "react";
import styles from "./DailyForecast.module.scss";

import { getDay } from "./../../../helpers/getDay";
import { convertKelvinToCelsius } from "./../../../helpers/convertKelvinToCelsius";

const DailyForecast = ({ daysWeather }) => {
  const kelvinTemp = daysWeather?.temp;
  return (
    <li className={styles.day}>
      <span className={styles.day__name}>{getDay(daysWeather?.date)}</span>
      <img
        className={styles.day__name}
        alt={daysWeather?.weather_desc}
        src={
          daysWeather
            ? require(`../../../assets/${daysWeather?.icon}.svg`)
            : require(`../../../assets/01d.svg`)
        }
        width="100"
        height="100"
      />
      <span className={styles.day__name}>
        {convertKelvinToCelsius(kelvinTemp)} &deg;C
      </span>
    </li>
  );
};

export default DailyForecast;
