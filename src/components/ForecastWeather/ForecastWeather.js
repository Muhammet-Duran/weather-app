import React from "react";
import styles from "./ForecastWeather.module.scss";

const ForecastWeather = () => {
  return (
    <div className={styles.forecast_area}>
      <ul className={styles.forecast_area__days_list}>
        <li className={styles.forecast_area__days_list__day}>
          <span className={styles.forecast_area__days_list__day__name}>
            Friday
          </span>
          <img
            className={styles.forecast_area__days_list__day__name}
            alt="images"
          />
          <span className={styles.forecast_area__days_list__day__name}>
            {" "}
            10 °C
          </span>
        </li>
        <li className={styles.forecast_area__days_list__day}>
          <span className={styles.forecast_area__days_list__day__name}>
            Friday
          </span>
          <img
            className={styles.forecast_area__days_list__day__name}
            alt="images"
          />
          <span className={styles.forecast_area__days_list__day__name}>
            {" "}
            10 °C
          </span>
        </li>
        <li className={styles.forecast_area__days_list__day}>
          <span className={styles.forecast_area__days_list__day__name}>
            Friday
          </span>
          <img
            className={styles.forecast_area__days_list__day__name}
            alt="images"
          />
          <span className={styles.forecast_area__days_list__day__name}>
            {" "}
            10 °C
          </span>
        </li>
        <li className={styles.forecast_area__days_list__day}>
          <span className={styles.forecast_area__days_list__day__name}>
            Friday
          </span>
          <img
            className={styles.forecast_area__days_list__day__name}
            alt="images"
          />
          <span className={styles.forecast_area__days_list__day__name}>
            {" "}
            10 °C
          </span>
        </li>
        <li className={styles.forecast_area__days_list__day}>
          <span className={styles.forecast_area__days_list__day__name}>
            Friday
          </span>
          <img
            className={styles.forecast_area__days_list__day__name}
            alt="images"
          />
          <span className={styles.forecast_area__days_list__day__name}>
            {" "}
            10 °C
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ForecastWeather;
