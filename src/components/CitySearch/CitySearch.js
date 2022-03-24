import React from "react";
import styles from "./CitySearch.module.scss";

const CitySearch = () => {
  return (
    <form className={styles.search__area}>
      <input
        className={styles.search__area__input}
        placeholder="Enter a City"
      ></input>
    </form>
  );
};

export default CitySearch;
