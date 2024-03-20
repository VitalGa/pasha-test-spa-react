
import { useState, useEffect } from 'react';
import styles from './Card.module.scss';
import axios from 'axios';
import Placeholder from '../Placeholder/Placeholder';

const Card = ({ selectedValue }) => {
  const [starships, setStarships] = useState([]);
  
  console.log(selectedValue)

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => {
        let sortedStarships = [];
        if (selectedValue === 'Name' || selectedValue === 'name') {
          sortedStarships = response.data.results.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedValue === 'Cost' || selectedValue === 'cost') {
          sortedStarships = response.data.results.sort((a, b) => a.cost_in_credits - b.cost_in_credits);
        }
        
        setStarships(sortedStarships);
      })
      .catch(error => {
        console.error(error);
      });
  }, [selectedValue]);

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
              <span>{starship.name.length > 20 ? `${starship.name.substring(0, 18)}...` : starship.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
