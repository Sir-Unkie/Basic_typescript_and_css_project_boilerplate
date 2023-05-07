import { useState } from 'react';

import { Second } from '@shared';

import styles from './styles.module.css';

export const FirstComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.second_wrapper}>
      <div className={styles.nested}>nested div</div>
      <div>{`Value=${value}`}</div>
      <div
        onClick={() => {
          setValue((prevValue) => prevValue + 1);
        }}
      >
        increase
      </div>
      <Second />
    </div>
  );
};
