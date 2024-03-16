import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['logo']}>StarDB</div>
      <div className={styles['menu']}>
        <img src="/menu.svg" alt="Иконка меню" />
      </div>
    </div>
  )
}

export default Header
