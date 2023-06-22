import { FunctionComponent } from 'react';
import { Command } from '../../Interfaces/command';
import styles from './index.module.scss';

export type CalculatorButtonProps = {
  text: string;
  command: Command;
};
export const CalculatorButton: FunctionComponent<CalculatorButtonProps> = ({
  text,
  command,
}) => {
  const handleCommand = (): void => {
    command.execute();
  };
  return (
    <button className={styles.calcButton} onClick={handleCommand}>
      {text}
    </button>
  );
};
