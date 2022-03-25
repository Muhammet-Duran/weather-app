import styles from "./App.module.scss";
import CitySearch from "./components/CitySearch/CitySearch";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/ForecastWeather/ForecastWeather";

function App() {
  return (
    <div className={styles.app}>
      <CitySearch />
      <div className={styles.app__weather_area}>
        <CurrentWeather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
