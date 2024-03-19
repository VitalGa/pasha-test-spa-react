import styles from './Select.module.scss';

const Select = (props) => {
    
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    props.onSelectChange(selectedValue)
    
    console.log('Выбранное значение:', selectedValue);
  }

    return (
      <div className={styles['container']}>
        <label htmlFor="selectOption" ></label>
        <select id={styles['selectOption']} value={props.selectedValue} onChange={handleChange}>
          <option value="name">Name</option>
          <option value="cost">Cost</option>
        </select>
      </div>
    );
}

export default Select;


