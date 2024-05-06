import styles from './value-viewer.module.css';

interface ValueViewerProps {
  value: string | number;
}

export const ValueViewer = (props: ValueViewerProps) => {
  const { value } = props;

  return <div className={styles.wrapper}>{value}</div>;
};
