import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './StarshipDetails.module.scss';
import { useParams, useNavigate } from 'react-router-dom';

const StarshipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [starshipData, setStarshipData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

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
    return <div>Space loading...</div>
  }

  
  return (
    <>
      <div className={styles['title']}>Starships</div>
      <div className={styles['container']}>
        { starshipData && (
          <>
            <img
                src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                alt={starshipData.name}
                className={styles.starshipImage}
            />
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut, est ipsum dolor quas laboriosam architecto itaque, commodi, provident eligendi omnis blanditiis. Ratione omnis a rerum magnam perferendis exercitationem. Sapiente!
                      </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StarshipDetails;


