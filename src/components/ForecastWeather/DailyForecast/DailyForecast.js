import React from "react";
import styles from "./DailyForecast.module.scss";

const DailyForecast = ({ daysWeather }) => {
  //return find the day of the week
  let getDay = (date) => {
    let weekDay = new Array(7);
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";

    return weekDay[new Date(date).getDay()];
  };
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
        {Number.parseFloat(kelvinTemp - 273.15).toFixed(0)} &deg;C
      </span>
    </li>
  );
};

export default DailyForecast;
