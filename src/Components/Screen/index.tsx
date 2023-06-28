import { FunctionComponent, useCallback } from 'react';
import styles from './index.module.scss';
import { EquationDisplay } from './EquationDisplay';
import { EquationState } from '../../Hooks/useCalculatorState';

type ScreenProps = {
  displayInput?: string;
  equationDisplayState?: EquationState
};

export const CalculatorDisplay: FunctionComponent<ScreenProps> = ({
  displayInput = '',
  equationDisplayState
}) => {
  const formatInput = useCallback(() => {
    const formatter = new Intl.NumberFormat('en-US');
    return formatter.format(parseInt(displayInput));
  }, [displayInput]);
  return (
    <div className={styles.calcDisplay}>
        {equationDisplayState && <div><EquationDisplay {...equationDisplayState} /></div>}
        {formatInput()}
        </div>
    );
};
