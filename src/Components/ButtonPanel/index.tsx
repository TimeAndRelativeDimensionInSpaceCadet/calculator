import { FunctionComponent } from 'react';
import styles from './index.module.scss';
import { CalculatorButton, CalculatorButtonProps } from '../Button';

type ButtonPanelProps = {
   buttonLayout: CalculatorButtonProps[];
};
export const ButtonPanel: FunctionComponent<ButtonPanelProps> = ({ buttonLayout }) => {
  
  const mapLayoutToButtons = () => {
    return buttonLayout.map(({...props}) => (<CalculatorButton  {...props} />))
  }
  return (
    <div className={styles.buttonPanelContainer}>
      <div className={styles.buttonPanel}>{mapLayoutToButtons()}</div>
    </div>
  );
};
