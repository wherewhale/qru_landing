import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React from 'react';
import Slider from 'react-slick';

import styles from './about.module.scss';

const About = () => {
  const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
  };
  return (
    <section className={styles.container}>
      <Slider className={styles.slick} {...setting}>
        <div className={styles.imageWrapper}>
          <img src={'/static/images/Intro/business_card_back_light.png'} className={styles.image} alt={'명함 예시2'} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={'/static/images/Intro/business_card_back_dark.png'} className={styles.image} alt={'명함 예시2'} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={'/static/images/Intro/business_card_back_light.png'} className={styles.image} alt={'명함 예시2'} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={'/static/images/Intro/business_card_back_dark.png'} className={styles.image} alt={'명함 예시2'} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={'/static/images/Intro/business_card_back_dark.png'} className={styles.image} alt={'명함 예시2'} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={'/static/images/Intro/business_card_back_dark.png'} className={styles.image} alt={'명함 예시2'} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={'/static/images/Intro/business_card_back_dark.png'} className={styles.image} alt={'명함 예시2'} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={'/static/images/Intro/business_card_back_dark.png'} className={styles.image} alt={'명함 예시2'} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={'/static/images/Intro/business_card_back_dark.png'} className={styles.image} alt={'명함 예시2'} />
        </div>
      </Slider>
    </section>
  );
};

export default About;
