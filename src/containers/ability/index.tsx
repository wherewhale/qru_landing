import React, { useRef } from 'react';

import Layout from '@/components/layout/intro';

import styles from './Ability.module.scss';

const Ability = () => {
  const ablityRef = useRef<HTMLDivElement>(null);
  return (
    <Layout>
      <section ref={ablityRef} className={styles.container}>
        어빌리티
      </section>
    </Layout>
  );
};

export default Ability;
