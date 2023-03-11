import { useEffect, useState } from 'react';

import styles from './logo.module.scss';

interface Props {
  isFooter?: boolean;
}

const Logo = ({ isFooter }: Props) => {
  const [src, setSrc] = useState('1x');
  useEffect(() => {
    if (isFooter) {
      setSrc('footer');
    }
  }, []);
  return (
    <button className={styles.wrapper}>
      <img src={`/static/images/common/logo_${src}.png`} className={styles.image} alt={'logo'} />
    </button>
  );
};

export default Logo;
