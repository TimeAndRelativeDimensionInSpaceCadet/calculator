import { FunctionComponent, PropsWithChildren } from 'react';
import styles from './index.module.scss';

export const CalculatorContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <div className={styles.calcWrapper}>{children}</div>;
};
