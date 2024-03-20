// import { useState } from 'react'
// import Select from '../Select/Select'
// import styles from './Starships.module.scss'
// import Card from '../Card/Card'

// const Starships = () => {

//   const [selectedValue, setSelectedValue] = useState('Name')

//   const handleSelectChange = (value) => {
//     setSelectedValue(value)
//   }

//   return (
//     <>
//       <div className={styles['title']}>Starships</div>
//         <div className={styles['menu']}>
//           <div className={styles['text']}>Sort by:</div>
//           <Select selectedValue={selectedValue} onSelectChange={handleSelectChange}/>
//         </div>
//       <Card/>
//     </>
//   )
// }

// export default Starships

import { useState } from 'react';
import Select from '../Select/Select';
import styles from './Starships.module.scss';
import Card from '../Card/Card';

const Starships = () => {
  const [selectedValue, setSelectedValue] = useState('Name');

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div className={styles['title']}>Starships</div>
      <div className={styles['menu']}>
        <div className={styles['text']}>Sort by:</div>
        <Select selectedValue={selectedValue} onSelectChange={handleSelectChange} />
      </div>
      <Card selectedValue={selectedValue} />
    </>
  );
};

export default Starships;

