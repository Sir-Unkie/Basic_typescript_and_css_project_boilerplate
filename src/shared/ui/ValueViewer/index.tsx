import { IValueViewerProps } from './types';

import styles from './styles.module.css';

export const ValueViewer = (props: IValueViewerProps) => {
  const { value } = props;

  return <div className={styles.wrapper}>{value}</div>;
};
