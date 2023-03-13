import Image from 'next/image';

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
      <div className={styles.main}>
        {option.map((_, index) => (
          <div className={styles.option} key={`${option[index].charAt(1)}${index}`}>
            <Image src="/static/images/Contact/icon_check.svg" className={styles.icon} width={20} height={20} alt="check" />
            {option[index]}
          </div>
        ))}
      </div>
      <button type="button" className={styles.button}>
        구매 요청
        <Image src="/static/images/Contact/icon_arrow.svg" className={styles.icon} width={20} height={20} alt="arrow" />
      </button>
    </div>
  );
};
export default Card;
