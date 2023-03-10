import styles from './zoom.module.scss';

interface Props {
  src: string;
  alt?: string;
}

const ZoomButton = ({ src, alt }: Props) => {
  return (
    <button className={styles.zoomButton}>
      <img src={`/static/images/About/sample_${src}.png`} className={styles.zoomButtonBackground} alt={alt} />
    </button>
  );
};

export default ZoomButton;
