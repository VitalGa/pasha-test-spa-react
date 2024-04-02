import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './Input.module.scss';

const schema = z.object({
  firstName: z.string()
    .min(8, { message: 'Min length must be 8 characters' })
    .max(15, { message: 'Max length must be 15 characters' }),
  lastName: z.string()
    .min(8, { message: 'Min length must be 8 characters' })
    .max(15, { message: 'Max length must be 15 characters' })
});

const Input = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles['container']}>
      
      <form className={styles['wrapper']} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['title']}>Form</div>
        <span>First Name:</span>
        <input 
          className={`${styles.firstName} ${errors.firstName ? styles.error : ''}`}
          {...register('firstName')}
        />
        {errors.firstName && <p className={styles.errorText}>{errors.firstName.message}</p>}
        
        <span>Last Name:</span>
        <input 
          className={`${styles.lastName} ${errors.firstName ? styles.error : ''}`}
          {...register('lastName')}
        />
        {errors.lastName && <p className={styles.errorText}>{errors.lastName.message}</p>}
        
        <input className={styles.button} type='submit'/> 
      </form>
    </div>
    
  );
}

export default Input;
