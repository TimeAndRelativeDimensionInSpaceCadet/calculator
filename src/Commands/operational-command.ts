import { Dispatch } from 'react';
import { Command } from '../Interfaces/command';
import { DispatchAction, OperatorMap } from '../Hooks/useCalculatorState';

export class OperationalCommand implements Command {
  private operatorType: OperatorMap;
  private stateHandler: Dispatch<DispatchAction>;

  constructor(operator: OperatorMap, handler: Dispatch<DispatchAction>) {
    this.operatorType = operator;
    this.stateHandler = handler;
  }

  
  execute = () => {
    console.log(this.operatorType);
  }
}
