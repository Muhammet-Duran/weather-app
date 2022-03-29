
import styles from "./CurrentWeather.module.scss";
// import asa from "./../../assets/01n.svg"

const CurrentWeather = ({weatherData}) => {
  
  
  const cityName = weatherData?.name?.split(" ")[0];

  const convertKelvintoCelcius = (kelvin)=>{
    let celcius = kelvin -273.15;
    celcius = Number.parseFloat(celcius).toFixed(0);
    return celcius;
  }
  console.log(weatherData)
  
  const description = weatherData?.weather[0]?.description;
 
  
  

 
  return (
    <div className={styles.weather_area}>
      {/* <img src={asa} alt="img" /> */}
      <div className={styles.weather_area__icons}>
        <img src={
          weatherData 
          ?require(`../../assets/${weatherData?.weather[0]?.icon}.svg`)
          :require(`../../assets/01d.svg`)
        } 
          alt={description} width="100" height="100"/>
      </div>
      <div className={styles.weather_area__info_content}>
        <p className={styles.weather_area__info_content__text}>Today</p>
        <p className={styles.weather_area__info_content__city}>
          {cityName}
        </p>
        <p className={styles.weather_area__info_content__text}>
          {convertKelvintoCelcius(weatherData?.main?.temp)} °C
        </p>
        <p className={styles.weather_area__info_content__text}>{description}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
