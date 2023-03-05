import cx from 'classnames';
import React, { RefObject } from 'react';

import styles from './navigator.module.scss';

interface Props {
  // onClick(tab: string): () => void;
  labels: string[];
  refs: RefObject<HTMLDivElement>[];
}

const Navigator = ({ labels, refs }: Props) => {
  const onScrollTo = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={styles.container}>
      <ul>
        {labels.map((label, index) => (
          <li className={cx(styles.label)} key={`${label}`} onClick={() => onScrollTo(refs[index])}>
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;
