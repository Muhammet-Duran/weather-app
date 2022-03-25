import React, { useState } from "react";
import styles from "./CitySearch.module.scss";


const CitySearch = () => {
  const [location, setLocation] =useState('')
  const onFormSubmit =(e)=>{
    if(!location || location === '')return;
    e.preventDefault();
    console.log(location)
  }
  return (
    <form className={styles.search__area} onSubmit={onFormSubmit}>
      <input
        className={styles.search__area__input}
        placeholder="Enter a City"
        value={location}
        onChange={e =>setLocation(e.target.value)}
      ></input>
      <button className={styles.search__area__btn} onClick={onFormSubmit}>SEARCH</button>
    </form>
  );
};

export default CitySearch;
