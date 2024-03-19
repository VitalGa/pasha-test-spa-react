import { useState, useEffect } from 'react';
import styles from './Card.module.scss';
import axios from 'axios';
import Placeholder from '../Placeholder/Placeholder';

const Card = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => {
        const sortedStarships = response.data.results.sort((a, b) => a.name.localeCompare(b.name));
        setStarships(sortedStarships);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {starships.map(starship => (
        <div key={starship.name} className={styles['container']}>
          <div className={styles['wrapper']}>
            {starship.image ? (
              <img src={starship.image} alt={starship.name} />
            ) : (
              <Placeholder />
            )}
          </div>
          <div className={styles['costName']}>
            <div className={styles['cost']}>
              <span>Cost:</span>
              <span>{starship.cost_in_credits}</span>
            </div>
            <div className={styles['name']}>
              <span>Name:</span>
              <span>{starship.name.length > 20 ? `${starship.name.substring(0, 20)}...` : starship.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
