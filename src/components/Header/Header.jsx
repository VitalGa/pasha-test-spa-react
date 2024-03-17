import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.scss';
import Icon from '../../assets/svg/Icon';
import Menu from '../Menu/Menu';
import ActiveIcon from '../../assets/svg/ActiveIcon';

const Header = () => {
  const [menuIcon, setMenuIcon] = useState(false); 

  return (
    <>
      <div className={styles['wrapper']}>
        <NavLink exact to="/" className={styles['logo-link']} onClick={() => setMenuIcon(false) }>
          <div className={styles['logo']}>StarDB</div>          
        </NavLink>      
        <div className={styles['menu']} onClick={() => setMenuIcon(!menuIcon)}>
          {menuIcon ? <ActiveIcon /> : <Icon />}
        </div> 
      </div>
      { menuIcon ? <Menu /> : null}
    </>
    
  );
};

export default Header;
