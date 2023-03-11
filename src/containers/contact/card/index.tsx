import styles from './card.module.scss';

interface Props {
  title: string;
  price: number;
  subtitle: string;
  option: string[];
  to?: string;
}

const Card = ({ title, price, subtitle, option, to }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.title}>₩{price}</div>
      <div className={styles.subTitle}>{subtitle}</div>
      <div>
        {option.map((_, index) => (
          <div className={styles.option} key={`${option[index].charAt(1)}${index}`}>
            <img src="/static/images/Contact/icon_check.svg" className={styles.icon} />
            {option[index]}
          </div>
        ))}
      </div>
      <button className={styles.button}>
        구매 요청
        <img src="/static/images/Contact/icon_arrow.svg" className={styles.icon} />
      </button>
    </div>
  );
};
export default Card;
