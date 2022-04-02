import styles from "./CurrentWeather.module.scss";

const CurrentWeather = ({ weatherData }) => {
  const cityName = weatherData?.city?.split(" ")[0];
  // const description = weatherData?.weather[0]?.description;
  const kelvinTemp = weatherData?.temp;

  return (
    <div className={styles.weather_area}>
      <div className={styles.weather_area__icons}>
        <img
          src={
            weatherData
              ? require(`../../assets/${weatherData?.icon}.svg`)
              : require(`../../assets/01d.svg`)
          }
          alt={weatherData?.weather_desc}
          width="100"
          height="100"
        />
      </div>
      <div className={styles.weather_area__info_content}>
        <p className={styles.weather_area__info_content__text}>Today</p>
        <p className={styles.weather_area__info_content__city}>{cityName}</p>
        <p className={styles.weather_area__info_content__text}>
          {Number.parseFloat(kelvinTemp - 273.15).toFixed(0)} &deg;C
        </p>
        <p className={styles.weather_area__info_content__text}>
          {weatherData?.weather_desc}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
