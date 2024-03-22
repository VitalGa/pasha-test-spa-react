import { useState, useEffect, useMemo } from 'react';
import styles from './Card.module.scss';
import axios from 'axios';
import Placeholder from '../Placeholder/Placeholder';

const Card = ({ selectedValue }) => {
  
  const [starshipsData, setStarshipsData] = useState([]);
    

  useEffect(() => {
      
    axios.get('https://swapi.dev/api/starships/')
      .then(response => {
        setStarshipsData(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const sortedStarships = useMemo(() => { 
    let sortedStarships = [...starshipsData];

    if (selectedValue.toLowerCase() === 'name') {
      sortedStarships.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedValue.toLowerCase() === 'cost') {
      sortedStarships.sort((a, b) => a.cost_in_credits - b.cost_in_credits);
    }

    return sortedStarships;
  }, [selectedValue, starshipsData]);

  return (
    <div>
      {sortedStarships.map(starship => (
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
              <span>{starship.name}</span>
            </div>
          </div>
        </div>
      ))}     
    </div>
  );
};

export default Card;
