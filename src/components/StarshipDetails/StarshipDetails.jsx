import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './StarshipDetails.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import Placeholder from '../Placeholder/Placeholder';

const StarshipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [starshipData, setStarshipData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
        setStarshipData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (hasError) {
      navigate('/404');
    }
  }, [hasError, navigate]);

  if (isLoading) {
    return <div className={styles.loading}>Space loading...</div>;
  }

  const handleImageError = () => {
    setImageError(true);
  };

  return (
      <div className={styles['container']}>
        <div className={styles['title']}>{starshipData && starshipData.name}</div>
        { starshipData && (
          <>
          <div className={styles.block}>
              {imageError ? (
                <Placeholder />
              ) : (
                <img
                  src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                  alt={starshipData.name}
                  className={styles.starshipImage}
                  onError={handleImageError}
                />
              )}
              
              <div className={styles['text']}>
                <p>Model: 
                    <span>{starshipData.model}</span>
                  </p>
                <p>Name: 
                  <span>{starshipData.name}</span>
                  </p>
                <p>Length: 
                  <span>{starshipData.length}</span>
                  </p>
                <p>Cost:
                  <span>{starshipData.cost_in_credits}</span>
                  </p>
                <p>Created:
                  <span>{starshipData.created.split('T')[0]}</span>
                  </p>
              </div>
            </div>

              <p className={styles['textLong']}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
              </p>
            
          </>
        )}
      </div>    
    
  );
};

export default StarshipDetails;



