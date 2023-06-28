import { FunctionComponent, /* useState, */ useCallback } from 'react';
import { CalculatorDisplay } from '../Screen/index';
import { CalculatorBody } from '../CalculatorBody';
import { ButtonPanel } from '../ButtonPanel';
import { basicLayout } from '../ButtonPanel/layouts';
import {
  NumericalCommand,
  OperationalCommand,
  DeleteCommand,
} from '../../Commands/index';
import { Command } from '../../Interfaces/command';
import {
  OperatorMap,
  useCalculatorState,
} from '../../Hooks/useCalculatorState';

export const Calculator: FunctionComponent = () => {
  const {
    state: { currentEntry },
    augmentedDispatch,
  } = useCalculatorState('0');

  const determineCommand = useCallback(
    (
      type: string,
      text: string,
      operatorType: OperatorMap = OperatorMap.NONE
    ): Command => {
      switch (type) {
        case 'number':
          return new NumericalCommand(parseInt(text), augmentedDispatch);
        case 'delete':
          return new DeleteCommand(augmentedDispatch);
        case 'operator':
          return new OperationalCommand(operatorType, augmentedDispatch);
        default:
          return { execute: () => {} };
      }
    },
    [augmentedDispatch]
  );

  const renderButtonLayoutWithCommands = useCallback(() => {
    return basicLayout.map(({ text, commandType, operatorType }) => ({
      text,
      command: determineCommand(commandType, text, operatorType),
    }));
  }, [determineCommand]);

  return (
    <CalculatorBody>
      <CalculatorDisplay displayInput={currentEntry} />
      <ButtonPanel buttonLayout={renderButtonLayoutWithCommands()} />
    </CalculatorBody>
  );
};
