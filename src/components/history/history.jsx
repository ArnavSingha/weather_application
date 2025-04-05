import React from 'react';
import styles from './history.module.css';
import { useAppContext } from '../../context/AppContext';

const SearchHistory = () => {
  const { history, setLatitude, setLongitude, addToHistory } = useAppContext();

  return (
    <div className={styles.history}>
      <h2>Search History</h2>
      <div className={styles.cardWrapper}>
        {history.map((item, index) => (
          <div 
            key={index} 
            className={styles.card}
            onClick={() => {
              setLatitude(item.latitude);
              setLongitude(item.longitude);
            }}
          >
            <span className={styles.label}>{item.name}</span>
            <span className={styles.label}>
              {new Date(item.timestamp).toLocaleString()}
            </span>
            <span className={styles.label}>
              Temp: {item.currentWeatherData?.main?.temp}°C
            </span>
            <span className={styles.label}>
              {item.currentWeatherData?.weather[0]?.main}
            </span>
          </div>

        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
