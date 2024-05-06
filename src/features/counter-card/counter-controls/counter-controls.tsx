import { decrement, increment } from '@shared/store/counter';
import { useAppDispatch } from '@shared/utils';

import styles from './counter-controls.module.css';

export const CounterControls = () => {
  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className={styles.buttons_wrapper}>
      <div
        className={styles.button}
        onClick={decrementHandler}
      >
        decrease
      </div>

      <div
        className={styles.button}
        onClick={incrementHandler}
      >
        increase
      </div>
    </div>
  );
};
