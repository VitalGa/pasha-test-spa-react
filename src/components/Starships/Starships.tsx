import { useState } from 'react';
import Select from '../Select/Select';
import styles from './Starships.module.scss';
import Card from '../Card/Card';

const Starships = () => {
  const [selectedValue, setSelectedValue] = useState<string>('Name');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['titleTop']}>
        <div className={styles['title']}>Starships</div>
        <div className={styles['menu']}>
          <div className={styles['text']}>Sort by:</div>
          <Select selectedValue={selectedValue} onSelectChange={handleSelectChange} />
        </div>
        <Card selectedValue={selectedValue} />
      </div>
    </div>
  );
};

export default Starships;
