import { useState } from 'react';

import styles from './styles.module.css';

export const FirstComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.secondWrapper}>
      <div>{value}</div>
      <div
        onClick={() => {
          setValue((prevValue) => prevValue + 1);
        }}
      >
        increase
      </div>
    </div>
  );
};
