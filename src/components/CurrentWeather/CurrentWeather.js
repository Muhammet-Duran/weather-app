import React from "react";
import styles from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
  return (
    
      <div className={styles.weather_area}>
        <div className={styles.weather_area__icons}></div>
        <div className={styles.weather_area__info_content}>
          <p className={styles.weather_area__info_content__text}>
            Today
          </p>
          <p className={styles.weather_area__info_content__city}>
            İstanbul
          </p>
          <p className={styles.weather_area__info_content__text}>
            temperature : 3 °C
          </p>
          <p className={styles.weather_area__info_content__text}>
            clear sky
          </p>
        </div>
      </div>
    
  );
};

export default CurrentWeather;
