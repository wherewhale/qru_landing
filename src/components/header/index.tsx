import { ReactNode } from 'react';

import styles from './header.module.scss';
import Logo from './logo';

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className={styles.container}>
      <Logo />
      <span className={styles.slogan}>Recognize Who You Are</span>
      {children}
    </header>
  );
};

export default Header;
