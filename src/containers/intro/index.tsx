import cx from 'classnames';
import React from 'react';
import { Animator, batch, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';

import styles from './intro.module.scss';

const Intro = () => {
  return (
    <section className={styles.container}>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: '60px' }}>새로운 명함의 시작</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveIn(500, 0), MoveOut(200, 0))}>
            <div className={styles.imageContainer}>
              <img src={'/static/images/Intro/business_card_back_dark.png'} className={cx(styles.cardBack)} alt={'명함 예시2'} />
            </div>
          </Animator>
          <Animator animation={batch(Sticky(), MoveIn(-500, 0), MoveOut(-200, 0))}>
            <div className={styles.imageContainer}>
              <img src={'/static/images/Intro/business_card_back_light.png'} className={cx(styles.cardBack)} alt={'명함 예시2'} />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(FadeIn(), StickyIn(), ZoomIn())}>
            <div className={styles.imageContainer}>
              <img src={'/static/images/Intro/business_card_light.png'} className={styles.card} alt={'명함 예시1'} />
              <img src={'/static/images/Intro/business_card_dark.png'} className={styles.card} alt={'명함 예시2'} />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </section>
  );
};

export default Intro;
