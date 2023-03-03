import React from 'react';

import styles from './navigation.module.scss';

interface Props {
  onClick(tab: string): () => void;
}

const Navigator = ({ onClick }: Props) => {
  const Index = ['Intro', 'About', 'Ability', 'Contact'];

  return (
    <nav className={styles.container}>
      <ul>
        {Index.map((label, index) => (
          <li className={styles.label} key={`${index}`} onClick={() => onClick(label)}>
            {Index[index]}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;
