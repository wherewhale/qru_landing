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
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>'QRU?'</h1>
        <span className={styles.subTitle}>QRU는 QR코드와 Who Are You의 합성어입니다.</span>
        <div className={styles.visionWrapper}>
          <div className={styles.top}>함께 가치를 높여 행복에 닿도록</div>
          <div className={styles.main}>
            우리는 기업과 고객이 함께 가치를 높이는 작업을 통해
            <p /> 여러분들께 행복을 드리고자 합니다.
          </div>
        </div>
        <h1 className={styles.title}>고객 사례</h1>
        <div className={styles.exampleContainer}>
          <button className={styles.zoomButton}>
            <img src={'/static/images/About/sample_card.png'} className={styles.zoomButtonBackground} alt={'buttonBackgroundSrc'} />
          </button>
          <button className={styles.zoomButton}>
            <img src={'/static/images/About/sample_pet.png'} className={styles.zoomButtonBackground} alt={'buttonBackgroundSrc'} />
          </button>
          <button className={styles.zoomButton}>
            <img src={'/static/images/About/sample_card.png'} className={styles.zoomButtonBackground} alt={'buttonBackgroundSrc'} />
          </button>
        </div>
        <div>
          포트폴리오 그 이상의 감동을 제작하고 명함 그 이상의 가치를 생산한다.
          <p /> - 고객을 100% 반영한 최적화 맞춤형 서비스를 창출한다. <p />- 단순 생산, 판매를 넘어 가치 창출의 서비스 경험을 제공한다.
        </div>
      </div>
    </section>
  );
};

export default About;
