import cx from 'classnames';
import Image from 'next/image';
import React from 'react';
import { Animator, batch, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';

import styles from './intro.module.scss';
import Slick from './slick';

const Intro = () => {
  return (
    <section className={styles.container}>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <div className={styles.text}>새로운 가치의 시작</div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveIn(500, 0), MoveOut(200, 0))}>
            <div className={styles.imageContainer}>
              <Image src={'/static/images/Intro/business_card_back_dark.png'} className={cx(styles.cardBack)} alt={'명함 예시2'} width={940} height={540} />
            </div>
          </Animator>
          <Animator animation={batch(Sticky(), MoveIn(-500, 0), MoveOut(-200, 0))}>
            <div className={styles.imageContainer}>
              <Image src={'/static/images/Intro/business_card_back_light.png'} className={cx(styles.cardBack)} alt={'명함 예시2'} width={940} height={540} />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(FadeIn(), StickyIn(), ZoomIn())}>
            <div className={styles.imageContainer}>
              <Image src={'/static/images/Intro/business_card_light.png'} className={cx(styles.card)} alt={'명함 뒷면1'} width={540} height={940} />
              <Image src={'/static/images/Intro/business_card_dark.png'} className={cx(styles.card)} alt={'명함 뒷면2'} width={540} height={940} />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <Slick />
    </section>
  );
};

export default Intro;
