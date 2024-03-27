import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuIcon, closeMenuIcon } from '../../store/menu.slice';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Header.module.scss';
import Icon from '../../assets/svg/Icon';
import Menu from '../Menu/Menu';
import ActiveIcon from '../../assets/svg/ActiveIcon';

const Header = () => {

const dispatch = useDispatch();
const menuIcon = useSelector((state) => state.menu.menuIcon);
let location = useLocation();


useEffect(() => {
  dispatch(closeMenuIcon(false));
}, [location, dispatch]);

  return (
    <>
      <div className={styles['wrapper']}>
        <NavLink  to="/" className={styles['logoLink']}>
          <div className={styles['logo']}>StarDB</div>
        </NavLink>
        <div className={styles['menu']} onClick={() => {dispatch(toggleMenuIcon(!menuIcon))}}>
          {menuIcon ? <ActiveIcon /> : <Icon />}
        </div>
      </div>
      { menuIcon ? <Menu /> : null}
    </>
  );
};

export default Header;
