import styles from './Placeholder.module.scss'

const Placeholder = ({className}) => {
  console.log(className)
  // const placeholderClasses = `${className || ''} ${styles.placeholder}`;
  return (
    <div className={`${className || ''} ${styles.placeholder}`}>
                Sorry, <br /> 
                the ships <br /> 
                are being washed.</div>
  )
}

export default Placeholder
