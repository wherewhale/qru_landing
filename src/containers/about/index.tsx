import React, { useRef } from 'react';

import Layout from '@/components/layout/intro';

import styles from './about.module.scss';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  return (
    <Layout>
      <section ref={aboutRef} className={styles.container}>
        어바웃
      </section>
    </Layout>
  );
};

export default About;
