import styles from './Select.module.scss';

const Select = (props) => {
    
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    props.onSelectChange(selectedValue)    
  }

    return (
      <div className={styles['container']}>
        <img src="Vector.svg" alt="галочка" /> 
        <label htmlFor="selectOption"></label>
        <select id={styles['selectOption']} value={props.selectedValue} onChange={handleChange}>
          <option  value="name">Name</option>
          <option value="cost">Cost</option>
        </select>
      </div>
    );
}

export default Select;


