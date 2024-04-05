import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuIcon, closeMenuIcon } from '../../store/menu.slice';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import Icon from '../../assets/svg/Icon';
import Menu from '../Menu/Menu' 
import ActiveIcon from '../../assets/svg/ActiveIcon';
import clsx from 'clsx';

const Header = () => {
  const dispatch = useDispatch();
  const menuIcon = useSelector((state) => state.menu.menuIcon);
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(closeMenuIcon(false));
  }, [location, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    // handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderMenuIcon = () => {
    if (windowWidth >= 1440) {
      return <div className={styles.rightMenu}>
            <NavLink
            to="/form"
            className={({ isActive }) => {
              return clsx(styles.form, isActive && styles.active)
            }}>Form</NavLink>

          <NavLink
            to="/starships"
            className={({ isActive }) => {
              return clsx(styles.form, isActive && styles.active)
            }}>Starships</NavLink>
        </div>
    } else {
      return menuIcon ? <ActiveIcon /> : <Icon />;
    }
  };

  return (
    <>
    <div className={styles['wrapper']}>
        <NavLink to="/" className={styles['logoLink']}>
          <div className={styles['logo']}>StarDB</div>
        </NavLink>
        <div className={styles['menu']} onClick={() => {dispatch(toggleMenuIcon(!menuIcon))}}>
          {renderMenuIcon()}
        </div>
      </div>
      {menuIcon && windowWidth < 1440 ? <Menu /> : null}
    </>
  );
};

export default Header;
