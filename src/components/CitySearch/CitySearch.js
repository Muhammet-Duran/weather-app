
import styles from "./CitySearch.module.scss";


const CitySearch = ({onFormSubmit, handleChange}) => {
  
  return (
    <form className={styles.search__area} onSubmit={onFormSubmit}>
      <input
        className={styles.search__area__input}
        placeholder="Enter a City"
        // value={location}
        onChange={handleChange}
      ></input>
      <button className={styles.search__area__btn} onClick={onFormSubmit}>SEARCH</button>
    </form>
  );
};

export default CitySearch;
