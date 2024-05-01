import styles from './Placeholder.module.scss';

type PlaceholderProps = {
  className?: string;
};

const Placeholder = ({ className }: PlaceholderProps) => {
  return (
    <div className={`${className || ''} ${styles.placeholder}`}>
      Sorry, <br />
      the ships <br />
      are being washed.
    </div>
  );
};

export default Placeholder;
