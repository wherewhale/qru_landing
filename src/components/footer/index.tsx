import Image from 'next/image';
import Link from 'next/link';

import Logo from '../header/logo';
import styles from './footer.module.scss';
import { socialData } from './socialData';

const Footer = () => {
  const social_button_map = socialData.map((href, index) => (
    <li className={styles.socialButtonIcon} key={socialData[index].src}>
      <Link href={socialData[index].href}>
        <button className={styles.iconButton}>
          <Image
            className={styles.socialButtonIcon}
            src={`/static/images/common/ico-${socialData[index].src}.svg`}
            width={20}
            height={20}
            alt={socialData[index].src}
          />
        </button>
      </Link>
    </li>
  ));
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <Logo isFooter={true} />
        </div>

        <ul className={styles.socialButtonsContainer}>{social_button_map}</ul>
      </div>
      <div className={styles.companyInformation}>
        <p className={styles.footerText}>상호 : QRU </p>
        <p className={styles.footerText}>대표자 : 김도협 | 주소 : 서울특별시 송파구 동나로6길 32, 306호(문정동, 빈스웰니스빌) | 이메일 : dobee@1bee.co.kr</p>
        <p className={styles.footerText}>사업자 번호 : 480-24-01690 | 통신판매업신고 번호 : 2022-서울송파-00520호 | 대표 전화 : 1600-응애응애</p>
        <p className={styles.textMarginTop}>Copyright Hanbee All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
