import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Cardship.module.scss';
import Placeholder from '../Placeholder/Placeholder';
import { getStarshipImage, getStarshipId } from '../Card/starship-utils';
import { Starship } from '../StarshipDetails/StarshipDetails';

type CardShipProps = {
  starship: Starship;
};

const CardShip: FC<CardShipProps> = ({ starship }) => {
  const starshipId: number | undefined = getStarshipId(starship.url);
  const starshipImage = getStarshipImage(starshipId);

  const [imageError, setImageError] = useState<boolean>(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <NavLink to={`/starships/${starshipId}`} key={starship.name} className={styles.container}>
      <div className={styles['wrapper']}>
        {imageError ? (
          <Placeholder className={styles.holder} />
        ) : (
          <img
            className={styles['image']}
            src={starshipImage}
            alt={starship.name}
            onError={handleImageError}
          />
        )}

        <figcaption className={styles.caption}>{starship.name}</figcaption>
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
    </NavLink>
  );
};

export default CardShip;
