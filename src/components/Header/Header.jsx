import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Icon from '../../assets/svg/Icon';
import Menu from '../Menu/Menu';
import ActiveIcon from '../../assets/svg/ActiveIcon';

const Header = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  // const [liner, setLiner] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setMenuIcon(false)
  }, [location]);

  return (
    <>
      <div className={styles['wrapper']}>
        <NavLink   to="/" className={styles['logoLink']} 
          onClick={() => setMenuIcon(false)}>
          <div className={styles['logo']}>StarDB</div>
        </NavLink>
        <div className={styles['menu']} onClick={() => {setMenuIcon(!menuIcon)}}>
          {menuIcon ? <ActiveIcon /> : <Icon />}
          {/* {menuIcon ? <ActiveIcon /> : <Icon />} */}
        </div> 
      </div>
      { menuIcon ? <Menu /> : null}
    </>
  );
};

export default Header;
