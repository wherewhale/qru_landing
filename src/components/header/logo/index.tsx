import styles from './logo.module.scss';

const Logo = () => {
  return (
    <button className={styles.wrapper}>
      <img src={'/static/images/common/logo_light.png'} className={styles.image} alt={'logo'} />
    </button>
  );
};

export default Logo;
