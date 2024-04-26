import CardShip from '../Cardship/Cardship';
import { useState, useEffect, useMemo, FC } from 'react';
import styles from './Card.module.scss';
import axios from 'axios';
import { Starship } from '../StarshipDetails/StarshipDetails';

type SelectedValueProps = {
  selectedValue: string;
};

type PaginationData<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

type Starships = PaginationData<Starship>;

const Card = ({ selectedValue }: SelectedValueProps) => {
  const [starshipsData, setStarshipsData] = useState<Starships['results']>([]);

  useEffect(() => {
    axios
      .get<Starships>('https://swapi.dev/api/starships/')
      .then((response) => {
        setStarshipsData(response.data.results);
      })
      .catch((error) => {
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
    <div className={styles['block']}>
      {sortedStarships.map((starship) => (
        <CardShip key={starship.name} starship={starship} />
      ))}
    </div>
  );
};

export default Card;
