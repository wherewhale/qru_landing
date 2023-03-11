import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import cx from 'classnames';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import styles from './about.module.scss';

const About = () => {
  // const spin = useParallax<HTMLDivElement>({
  //   rotateY: [0, 360],
  // });
  return (
    <section className={styles.container}>
      <Parallax speed={20}>
        <div className={styles.wrapper}>
          <img src={'/static/images/About/background_mission.png'} className={styles.background} alt={'background'} />
          <h1 className={styles.title}>'QRU?'</h1>
          <span className={styles.subTitle}>QRU는 'QR'과 'Who Are You'의 합성어입니다.</span>
          <div className={styles.visionWrapper}>
            <div className={styles.top}>함께 가치를 높여 행복에 닿도록</div>
            <div className={styles.main}>
              우리는 기업과 고객이 함께 가치를 높이는 작업을 통해
              <p /> 여러분들께 행복을 드리고자 합니다.
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax>
        <div className={cx(styles.wrapper, styles.color)}>
          <img src={'/static/images/About/background_vision.png'} className={styles.background} alt={'background'} />
          <div className={styles.subTitle}>늘 감동을 제작하고 작품 그 이상의 가치를 생산합니다.</div>
          <div className={cx(styles.main, styles.large)}>
            고객을 100% 반영한 최적화 맞춤형 서비스를 창출하여
            <p /> 단순 생산, 판매를 넘어 가치 창출의 서비스 경험을 제공하겠습니다.
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default About;
