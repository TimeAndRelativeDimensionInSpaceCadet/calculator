import { FunctionComponent, useCallback } from 'react';
import styles from './index.module.scss';

type ScreenProps = {
  displayInput?: string;
};

export const CalculatorDisplay: FunctionComponent<ScreenProps> = ({
  displayInput = '',
}) => {
  const formatInput = useCallback(() => {
    const formatter = new Intl.NumberFormat('en-US');
    return formatter.format(parseInt(displayInput));
  }, [displayInput]);
  return <div className={styles.calcDisplay}>{formatInput()}</div>;
};
