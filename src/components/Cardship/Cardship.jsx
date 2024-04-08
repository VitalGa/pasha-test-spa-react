import styles from './Cardship.module.scss'; 
import { NavLink } from 'react-router-dom';


const CardShip = ({ starship, getStarshipId, getStarshipImage }) => {
  return (
    <NavLink to={`/starships/${getStarshipId(starship.url)}`} key={starship.name} className={styles.container}>
      <div className={styles['wrapper']}>
        <img className={styles['image']} src={getStarshipImage(getStarshipId(starship.url))} alt={starship.name} />
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

