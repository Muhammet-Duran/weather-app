import React from "react";
import styles from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
  return (
    <div className={styles.weather_area}>
      <div className={styles.weather_area__inner}>
        <div className={styles.weather_area__inner__icons}></div>
        <div className={styles.weather_area__inner__info__content}>
          <p className={styles.weather_area__inner__info__content__text}>
            Today
          </p>
          <p className={styles.weather_area__inner__info__content__city}>
            İstanbul
          </p>
          <p className={styles.weather_area__inner__info__content__text}>
            temperature : 3 °C
          </p>
          <p className={styles.weather_area__inner__info__content__text}>
            clear sky
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
