import styles from './Button.module.scss'

interface MyObject {
  text: string
}
const Button = ({text}: MyObject) => {
  return (
    <button className={styles['button']}>{text}</button>
  )
}

export default Button
