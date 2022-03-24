import styles from "./App.module.scss";
import CitySearch from "./components/CitySearch/CitySearch";

function App() {
  return (
    <div className={styles.app}>
      <CitySearch />
      <div className={styles.app__weather_area}></div>
    </div>
  );
}

export default App;
