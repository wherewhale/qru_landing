import styles from './progressBar.module.scss';

const Progress = () => {
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   setProgress(PositionY);
  // }, []);

  // const [progress, setProgress] = useState(0);

  // const barStyle = {
  //   width: { progress },
  // };

  // const handleScroll = () => {
  //   console.log('scrolled');
  // };
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar} />
    </div>
  );
};

export default Progress;
