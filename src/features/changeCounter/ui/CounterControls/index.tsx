import { decrement, increment } from '@entities/count';

import { useAppDispatch } from '@shared/lib';

import styles from './styles.module.css';

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
