import React, { useRef } from 'react';

import styles from './Ability.module.scss';

const Ability = () => {
  const ablityRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={ablityRef} className={styles.container}>
      어빌리티
    </section>
  );
};

export default Ability;
