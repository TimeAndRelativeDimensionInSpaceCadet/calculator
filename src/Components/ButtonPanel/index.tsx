import { FunctionComponent, cloneElement } from 'react';
import styles from './button-panel.module.scss';
import { CalculatorButton, CalculatorButtonProps } from '../Button/calc-button';

type ButtonPanelProps = {
  buttonLayout: CalculatorButtonProps[];
};
export const ButtonPanel: FunctionComponent<ButtonPanelProps> = ({
  buttonLayout,
}) => {
  const mapLayoutToButtons = () => {
    return buttonLayout.map(({ ...props }) =>
      cloneElement(<CalculatorButton {...props} />)
    );
  };
  return (
    <div className={styles.buttonPanelContainer}>
      <div className={styles.buttonPanel}>{mapLayoutToButtons()}</div>
    </div>
  );
};
