import React, { useRef } from 'react';

import Layout from '@/components/layout/intro';

import styles from './intro.module.scss';

const Intro = () => {
  const introRef = useRef<HTMLDivElement>(null);
  return (
    <Layout>
      <section ref={introRef} className={styles.container}>
        인트로
      </section>
    </Layout>
  );
};

export default Intro;
