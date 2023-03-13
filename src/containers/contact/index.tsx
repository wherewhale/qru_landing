import React from 'react';

import Card from './card';
import styles from './contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          여러분에게 맞는 상품을
          <br /> 확인해보세요.
        </div>
        <div className={styles.cardContainer}>
          <Card
            title={'BASIC'}
            price={20000}
            subtitle={'가장 간편한 상품입니다. 심플한 디자인과 기본 옵션을 선택할 수 있습니다.'}
            option={['1번 옵션', '2번 옵션', '3번 옵션', '4번 옵션']}
          />
          <Card
            title={'PREMIUM'}
            price={50000}
            subtitle={'가장 간편한 상품입니다. 심플한 디자인과 기본 옵션을 선택할 수 있습니다.'}
            option={['1번 옵션', '2번 옵션', '3번 옵션', '4번 옵션']}
          />
          <Card
            title={'UNLIMITED'}
            price={0}
            subtitle={'가장 간편한 상품입니다. 심플한 디자인과 기본 옵션을 선택할 수 있습니다.'}
            option={['1번 옵션', '2번 옵션', '3번 옵션', '4번 옵션']}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
