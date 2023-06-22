import { FunctionComponent, PropsWithChildren } from 'react';
import styles from './index.module.scss';

export const CalculatorBody: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <div className={styles.calcBody}>{children}</div>;
};
