import styles from './Menu.module.scss'
import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <div className={styles['wrapperMenu']}>
      <NavLink to="/starships">
        <span className={styles['link']}>Starships</span>
      </NavLink>
    <span>Form</span>
    </div>
  )
}

export default Menu
