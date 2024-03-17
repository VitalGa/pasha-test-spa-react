import DropdownMenu from '../DropdownMenu/DropdownMenu'
import styles from './Starships.module.scss'

const Starships = () => {
  return (
    <>
      <div className={styles['title']}>Starships</div>
        <div className={styles['menu']}>
          <div className={styles['text']}>Sort by:</div>
          <DropdownMenu/>
        </div>
    </>
      
    
    
  )
}

export default Starships
