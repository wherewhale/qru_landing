import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import cx from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import styles from './about.module.scss';

const About = () => {
  const [imageSize, setImageSize] = useState('');
  const [width, setWidth] = useState(Number);
  const [height, setHeight] = useState(Number);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(width, height);
    if (width >= 320 && width < 768) {
      setImageSize('mobile');
    } else if (width >= 768 && width < 1000) {
      setImageSize('tab');
    } else {
      setImageSize('desktop');
    }
  }, [width, height]);

  return (
    <section className={styles.container}>
      <Parallax speed={20}>
        <div className={styles.wrapper}>
          <Image
            src={`/static/images/About/background_mission_${imageSize}.png`}
            className={styles.background}
            alt={'background_Mission'}
            width={width}
            height={height}
          />
          <h1 className={styles.title}>'QRU?'</h1>
          <h2 className={styles.subTitle}>QRU는 'QR'과 'Who Are You'의 합성어입니다.</h2>
          <div className={styles.visionWrapper}>
            <p className={styles.top}>함께 가치를 높여 행복에 닿도록</p>
            <p className={styles.main}>
              우리는 기업과 고객이 함께 가치를 높이는 작업을 통해
              <br /> 여러분들께 행복을 드리고자 합니다.
            </p>
          </div>
        </div>
      </Parallax>

      <Parallax>
        <div className={cx(styles.wrapper, styles.color)}>
          <Image
            src={`/static/images/About/background_vision_${imageSize}.png`}
            className={styles.background}
            alt={'background_Vision'}
            width={width}
            height={height}
          />
          <h2 className={styles.subTitle}>
            늘 감동을 제작하고 작품 <p />그 이상의 가치를 생산합니다.
          </h2>
          <p className={cx(styles.main, styles.large)}>
            고객을 100% 반영한 최적화 맞춤형 서비스를 창출하여
            <br /> 단순 생산, 판매를 넘어 가치 창출의 서비스 경험을 제공하겠습니다.
          </p>
        </div>
      </Parallax>
    </section>
  );
};

export default About;
