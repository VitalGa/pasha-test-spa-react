import CardShip from '../Cardship/Cardship';
import { useState, useEffect, useMemo } from 'react';
import styles from './Card.module.scss';
import axios from 'axios';



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
    <div className={styles['block']}>{sortedStarships.map(starship => (
          <CardShip
          key={starship.name}
          starship={starship}
          getStarshipId={getStarshipId}
          getStarshipImage={getStarshipImage}
          />
        )
      )}  
    </div>
  );
};

const getStarshipId = (url) => {
  const starshipId = url.split('/').filter(Boolean).pop();
  return starshipId;
}

const getStarshipImage = (id) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
}

export default Card;