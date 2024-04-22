import styles from './Select.module.scss';

type Props = { onSelectChange: (value: string) => void; selectedValue: string };

const Select = ({ onSelectChange, selectedValue }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelectChange(selectedValue);
  };

  return (
    <div className={styles['container']}>
      <img src='Vector.svg' alt='галочка' />
      <label htmlFor='selectOption'></label>
      <select id={styles['selectOption']} value={selectedValue} onChange={handleChange}>
        <option value='name'>Name</option>
        <option value='cost'>Cost</option>
      </select>
    </div>
  );
};

export default Select;
