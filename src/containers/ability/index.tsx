import React from 'react';

import styles from './ability.module.scss';
import ZoomButton from './customButton/zoom';

//TODO: 컴포넌트로 구성
const Ability = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <ZoomButton src="card.png" alt="card image" />
        <div className={styles.wrapper}>
          <div className={styles.title}>명품 소개 가치</div>
          <div className={styles.subTitle}>편리한 디지털 명함 제작 가능</div>
          <div className={styles.main}>
            QRU는 여러분에게 새로운 명함의 방식을 제시합니다.
            <p />
            인상적이고, 편리한 인사를 주고 받아보세요.
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <ZoomButton src="pet.png" alt="cat image" />
        <div className={styles.wrapper}>
          <div className={styles.title}>기억의 저장</div>
          <div className={styles.subTitle}>가족과의 추억을 늘 우리 곁에</div>
          <div className={styles.main}>
            QRU는 소개의 가치를 넘어, 여러분의 기억과 추억을
            <p />더 아름답고 가치있게 만들어 드립니다.
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <ZoomButton src="portfolio.jpg" alt="portfolio image" />
        <div className={styles.wrapper}>
          <div className={styles.title}>커리어의 시각화</div>
          <div className={styles.subTitle}>나의 능력과 가치를 보여주는 일</div>
          <div className={styles.main}>
            QRU는 여러분의 능력을 더욱 빛나게 합니다.
            <p />
            고객의 요구를 100% 반영합니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ability;
