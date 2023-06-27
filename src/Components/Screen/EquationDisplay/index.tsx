import { FunctionComponent, useCallback } from 'react';

type EquationProps = {
  left: string;
  operator: string;
  right: string;
};

export const EquationDisplay: FunctionComponent<EquationProps> = ({
  left = '',
  operator = '',
  right = '',
}) => {
  const constructEquationOutput = useCallback(
    () => `${left}${operator}${right}`,
    [left, operator, right]
  );
  return <div>{constructEquationOutput()}</div>;
};
