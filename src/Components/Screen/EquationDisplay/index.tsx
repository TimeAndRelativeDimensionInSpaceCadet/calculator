import { FunctionComponent, useCallback } from 'react';
import { OperatorMap } from '../../../Hooks/useCalculatorState';

type EquationProps = {
  leftOperand: string;
  operator: OperatorMap;
  rightOperand: string;
};

export const EquationDisplay: FunctionComponent<EquationProps> = ({
  leftOperand = '',
  operator = '',
  rightOperand = '',
}) => {
  const constructEquationOutput = useCallback(
    () => `${leftOperand}${operator}${rightOperand}`,
    [leftOperand, operator, rightOperand]
  );
  return <div>{constructEquationOutput()}</div>;
};
