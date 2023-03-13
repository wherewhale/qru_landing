import Image from 'next/image';
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
      <Image src={`/static/images/common/logo_${src}.png`} className={styles.image} alt={'logo'} width={80} height={80} />
    </button>
  );
};

export default Logo;
