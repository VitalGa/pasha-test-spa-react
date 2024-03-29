import styles from './Input.module.scss';
import { useForm } from 'react-hook-form';

const Input = () => {

  const {
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit((data) => {
      console.log(data);
    })}>
      <span>First Name:</span>
      <input 
        className={errors.firstName ? styles.error : ''}
        {...register('firstName', {
          required: 'This is required',
          minLength: {
            value: 8,
            message: 'Min length must be 8 characters'
          },
          maxLength: {
            value: 15,
            message: 'Max length must be 15 characters'
          }
        })}
      />
      {errors.firstName && <p className={styles.errorText}>{errors.firstName.message}</p>}
      <span>Last Name:</span>
      <input 
        className={errors.lastName ? styles.error : ''}
        {...register('lastName', {
          required: 'This is required',
          minLength: {
            value: 8,
            message: 'Min length must be 8 characters'
          },
          maxLength: {
            value: 15,
            message: 'Max length must be 15 characters'
          }
        })}
      />
      {errors.lastName && <p className={styles.errorText}>{errors.lastName.message}</p>}
      <input className={styles.button} type='submit'/> 
    </form>
  );
}

export default Input;
