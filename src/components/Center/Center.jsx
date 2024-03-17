import styles from './Center.module.scss'

const Center = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['title']}>
          Welcome to <br /> StarDB           
      </div>
      <div className={styles['text']}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</div>
    </div>
  )
}

export default Center
